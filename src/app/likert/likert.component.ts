import { Component, OnInit, Input} from '@angular/core';
import { LikertService } from '../services/likert.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-likert',
  templateUrl: './likert.component.html',
  styleUrls: ['./likert.component.scss']
})
export class LikertComponent implements OnInit {
  json: any = {questions: null};
  html: object | boolean = false;
  requestUrl: string = environment.apiUrl;
  constructor(
    private liService: LikertService,
    private route: Router,
    private cookieService: CookieService,
    private http: HttpClient,
  ) { }

  decidePath() {
    const pathIndex = Number(this.cookieService.get('user_current_path_index'));
    const pathArray: Array<object> = JSON.parse(this.cookieService.get('user_path'));
    const type: string = pathArray[pathIndex]['type'];
    if (type === 'normal') {
      this.route.navigate(['likert']);
      this.liService.requestForm();
    } else if (type === 'qv') {
      this.route.navigate(['qv']);
    } else if (type === 'video') {
      this.route.navigate(['video']).then(() => location.reload());
    } else if (type === 'complete') {
      const userID = this.cookieService.get('user_id');
      this.cookieService.deleteAll('/');
      const file = pathArray[pathIndex]['file'];
      this.http.get(`${this.requestUrl}/thank_you/${file}`).subscribe(
        thankYouData => {
          this.route.navigate(['complete', {userId: userID, ...thankYouData}]);
        }
      );
    }
  }

  ngOnInit() {
    this.liService.requestForm();
    this.liService.likertForm.subscribe(data => {
      if (data['survey']) {
        this.json = {
          questions: data['survey'],
          showNav: true,
        };
        this.html = null;
      }
      if (data['html']) {
        this.html = data['html'];
      }
    });
  }

  submit(data, e?) {
    if (e) {
      e.target.disabled = true;
    }
    this.liService.submit(data).subscribe(
      result => {
        this.decidePath();
      }
    );
  }
}

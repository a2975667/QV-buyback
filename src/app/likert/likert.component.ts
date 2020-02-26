import { Component, OnInit, Input} from '@angular/core';
import { LikertService } from '../services/likert.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-likert',
  templateUrl: './likert.component.html',
  styleUrls: ['./likert.component.scss']
})
export class LikertComponent implements OnInit {
  json: any = {questions: null};
  html: object | boolean = false;
  constructor(
    private liService: LikertService,
    private route: Router,
    private cookieService: CookieService,
  ) { }

  decidePath() {
    let pathIndex = Number(this.cookieService.get('user_current_path_index'));
    let pathArray: Array<object> = JSON.parse(this.cookieService.get('user_path'));
    let type: string = pathArray[pathIndex]['type'];
    if(type == 'normal'){
      this.route.navigate(['likert']);
      this.liService.requestForm();
    } else if(type == 'qv'){
      this.route.navigate(['qv']);
    } else if(type == 'video'){
      this.route.navigate(['video']).then(()=>location.reload());
    } else if(type == 'complete'){
      const userID = this.cookieService.get('user_id');
      this.cookieService.deleteAll('/');
      this.route.navigate(['complete', {userId: userID, text: null, title: null }]);
    }
  }

  ngOnInit() {
    this.liService.requestForm();
    this.liService.likertForm.subscribe(data => {
      if(data['survey']){
        this.json = {
          questions: data['survey'],
          showNav: true,
        }
      }
      console.log(this.html)
      if(data['html']) {
        this.html = data['html'];
      }
    })
  }

  submit(data){
    this.liService.submit(data).subscribe(
      result => {
        this.decidePath();
      }
    );
  }
}

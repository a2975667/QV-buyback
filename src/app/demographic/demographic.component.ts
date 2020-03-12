import { Component, OnInit } from '@angular/core';
import { DemographicService } from '../services/demographic.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-demographic',
  templateUrl: './demographic.component.html',
  styleUrls: ['./demographic.component.scss']
})
export class DemographicComponent implements OnInit {
  demoForm: Object;
  constructor(
    private route: Router,
    private cookieService: CookieService,
    private demoFormService: DemographicService
  ) {}

  ngOnInit() {
    this.demoFormService.demoForm.subscribe(data => {
      this.demoForm = {
        questions: data['survey'],
        showNav: true,
      };
    });
    this.demoFormService.requestForm();
  }

  getCookieById(id: string) {
    return this.cookieService.get(id);
  }

  submit(data) {
    this.demoFormService.submit(data).subscribe(
      result => {
        const pathIndex = Number(this.getCookieById('user_current_path_index'));
        const pathArray: Array<object> = JSON.parse(this.getCookieById('user_path'));
        const type: string = pathArray[pathIndex]['type'];
        if (type === 'normal') {
          this.route.navigate(['likert']);
        } else if (type === 'video') {
          this.route.navigate(['video']).then(() => location.reload());
        } else {
          this.route.navigate(['qv']);
        }
      }
    );
  }
}

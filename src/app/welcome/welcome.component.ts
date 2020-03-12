import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';
import { GlobalService } from '../services/global.service';
import { User } from '../schema/user';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  conditionOne = false;
  conditionTwo = false;
  conditionThree = false;
  blockAccess = false;
  isSubmit: boolean;

  constructor(
    private gService: GlobalService,
    private router: Router,
    private cookieService: CookieService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.blockAccess = navigator.userAgent.indexOf('Safari') !== -1 && !(navigator.userAgent.indexOf('Chrome') !== -1);
    if (this.cookieService.check('user_id')) {
      const pathIndex = Number(this.cookieService.get('user_current_path_index'));
      const pathArray: Array<object> = JSON.parse(this.cookieService.get('user_path'));
      const type: string = pathArray[pathIndex]['type'];
      if (type === 'normal') {
        this.router.navigate(['likert']);
      } else if (type === 'qv') {
        this.router.navigate(['qv']);
      } else if (type === 'video') {
        this.router.navigate(['video']).then(() => location.reload());
      } else {
        this.router.navigate(['welcome']);
      }
    }
  }

  initCookie(user: User){
    this.cookieService.set('user_gp', user.gp, undefined, '/');
    this.cookieService.set('user_path_id', user.path_id, undefined, '/');
    this.cookieService.set('user_current_question_index', String(0), undefined, '/');
    this.cookieService.set('user_complete_flag', String(user.complete_flag), undefined, '/');
    this.cookieService.set('user_path', JSON.stringify(user.path), undefined, '/');
    this.cookieService.set('user_id', user.userid, undefined, '/');
    this.cookieService.set('user_current_path_index', String(0), undefined, '/');
  }

  createUser() {
    this.isSubmit = true;
    if (this.conditionOne && this.conditionTwo && this.conditionTwo) {
      if (!this.cookieService.check('user_id')) {
        const userGP = this.route.snapshot.paramMap.get('id');
        this.gService.getUserID(userGP).subscribe((user: User) => {
          this.initCookie(user);
          if (user.path_id === 'thank_you') {
            const userID = this.cookieService.get('user_id');
            this.cookieService.deleteAll('/');
            this.router.navigate(['complete', {userId: userID, text: null, title: null }])
          } else {
            this.router.navigate(['demographic']);
          }
        });
      } else {
        this.router.navigate(['demographic']);
      }
    }
  }

  cancel() {
    alert('Please close the browser.');
  }
}

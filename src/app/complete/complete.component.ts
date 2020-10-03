import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'app-complete',
    templateUrl: './complete.component.html',
    styleUrls: ['./complete.component.scss']
})
export class CompleteComponent implements OnInit {
    title: string;
    text: string;
    code: string;
    url: string;
    constructor(
        private cookieService: CookieService,
        private route: ActivatedRoute,
    ) { }

    setCookieExpire(id, val) {
        const date = new Date();
        date.setTime(date.getTime() + (1 * 1000));
        this.cookieService.set(
            id,
            val,
            date,
            '/',
            undefined,
            false,
            'Lax'
        );
    }

    ngOnInit() {
        this.setCookieExpire('user_gp', '');
        this.setCookieExpire('user_path_id', '');
        this.setCookieExpire('user_current_question_index', '');
        this.setCookieExpire('user_complete_flag', '');
        this.setCookieExpire('user_path', '');
        this.setCookieExpire('user_id', '');
        this.setCookieExpire('user_current_path_index', '');
        this.cookieService.deleteAll();
        this.cookieService.deleteAll('/');
        this.cookieService.deleteAll('/', 'localhost');
        this.cookieService.deleteAll('/', 'qv-video.herokuapp.com');
        this.title = this.route.snapshot.paramMap.get('title');
        this.code = this.route.snapshot.paramMap.get('userId');
        this.text = this.route.snapshot.paramMap.get('text');

        if (this.title === 'null') {
            this.setCookieExpire('user_gp', '');
            this.setCookieExpire('user_path_id', '');
            this.setCookieExpire('user_current_question_index', '');
            this.setCookieExpire('user_complete_flag', '');
            this.setCookieExpire('user_path', '');
            this.setCookieExpire('user_id', '');
            this.setCookieExpire('user_current_path_index', '');
            this.cookieService.deleteAll();
            this.cookieService.deleteAll('/');
            this.cookieService.deleteAll('/', 'localhost');
            this.cookieService.deleteAll('/', 'qv-video.herokuapp.com');
            this.title = 'Thank you';
            this.code = 'We have received enough responses from your demographic group. Thank you for participating. Do not paste anything to the original hit page.';
            this.text = '';
            this.url = '';
        }
    }

}

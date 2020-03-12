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

  ngOnInit() {
    this.cookieService.deleteAll('/');
    this.title = this.route.snapshot.paramMap.get('title');
    this.code = this.route.snapshot.paramMap.get('userId');
    this.text = this.route.snapshot.paramMap.get('text');
    if (this.title === 'null'){
      this.title = 'Thank you';
      this.text = 'Unfortunately the survey has collected enough response.';
      this.url = '';
    }
  }

}

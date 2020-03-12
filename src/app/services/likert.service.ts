import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError, Observable, empty} from 'rxjs';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LikertService {
  requestUrl = environment.apiUrl;
  likertForm: BehaviorSubject<Object> = new BehaviorSubject({});
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router,
  ) { }

  getCookieById(id: string) {
    return this.cookieService.get(id);
  }

  getCurrentPath(): string {
    if (!this.cookieService.check('user_id')) {
      this.router.navigate(['/']);
      return null;
    } else {
      const pathIndex = Number(this.getCookieById('user_current_path_index'));
      const pathArray: Array<object> = JSON.parse(this.getCookieById('user_path'));
      return pathArray[pathIndex]['file'];
    }
  }

  requestForm() {
    const fileName: string = this.getCurrentPath();
    const fileAPI = `${this.requestUrl}/api/qv/${fileName}`;
    this.http.get(fileAPI).pipe(
      catchError(this.handleError)
    ).subscribe(data => {
      this.likertForm.next(data);
    });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }


  isQVTestResultFailed(data){
    const pathIndex = Number(this.getCookieById('user_current_path_index'));
    const pathArray: Array<object> = JSON.parse(this.getCookieById('user_path'));
    const currentFile = pathArray[pathIndex]['file'];
    if (currentFile === 'test_qv') {
      const conditions = [
        data['ac1'] === '(T) True',
        data['ac2'] === '(F) False',
        data['ac3'] === '(F) False',
        data['ac4'] === '(F) False',
        data['ac5'] === '(4) 20993',
        data['ac6'] === '(4) 12345',
      ];
      return this.decideWhetherPassTest(conditions, 2);
    } else if (currentFile === 'test_video_element') {
      const conditions = [
        data['ac1'] === '(T) True',
        data['ac2'] === '(F) False',
        data['ac3'] === '(F) False',
        data['ac4'] === '(F) False',
        data['ac5'] === '(4) 20993',
        data['ac6'] === '(4) 12345',
      ];
      return this.decideWhetherPassTest(conditions, 2);
    } else {
      return false;
    }
  }

  decideWhetherPassTest(conditions, minFailedQuestionNumber) {
    let noFailedQuestion = 0;
    conditions.forEach(val => {
      if (!val) {
        noFailedQuestion ++;
      }
    });
    return noFailedQuestion > minFailedQuestionNumber;
  }

  submit(data) {
    const pathIndex = Number(this.getCookieById('user_current_path_index'));
    const userId = this.cookieService.get('user_id');
    const gp = this.cookieService.get('user_gp');
    const pathId = this.cookieService.get('user_path_id');
    if (this.isQVTestResultFailed(data)) {
      // fail the QVTest and delete all cookies
      this.http.post(`${this.requestUrl}/api/disqualify`, {
        gp,
        pathId,
        userid: userId,
      }).subscribe(res => {
        this.cookieService.deleteAll('/');
        this.http.get(`${this.requestUrl}/thank_you/thank_attention`).subscribe(
          thankYouData => {
            this.router.navigate(['complete', {userId, ...thankYouData}]);
          }
        );
      });
      return empty();
    }
    this.cookieService.set('user_current_path_index', String(pathIndex + 1), undefined, '/');
    return this.http.post(`${this.requestUrl}/submit`,
      {
        data,
        userId,
      }
    ).pipe(
      catchError(this.handleError)
    );
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError, Observable, empty} from 'rxjs';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { submitPostSchema } from '../schema/submitPostSchema';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LikertService {
  requestUrl = '';
  likertForm: BehaviorSubject<Object> = new BehaviorSubject({});
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router,
  ) { }
  getCookieById(id: string) {
    return this.cookieService.get(id);
  }
  getCurrentPath() :string {
    if(!this.cookieService.check('user_id')){
      this.router.navigate(['/']);
      return null;
    }else{
      let pathIndex = Number(this.getCookieById('user_current_path_index'));
      let pathArray: Array<object> = JSON.parse(this.getCookieById('user_path'));
      return pathArray[pathIndex]['file'];
    }
  }
  requestForm(){
    let fileName: string = this.getCurrentPath();
    let fileAPI = `${this.requestUrl}/api/qv/${fileName}`;
    this.http.get(fileAPI).pipe(
      catchError(this.handleError)
    ).subscribe(data => {
      console.log(data);
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
  };
  isQVTestResultFailed(data){
    let pathIndex = Number(this.getCookieById('user_current_path_index'));
    let pathArray: Array<object> = JSON.parse(this.getCookieById('user_path'));
    let currentFile =pathArray[pathIndex]['file'];
    if (currentFile==='test_qv') {
      let conditions = [
        data['ac1']==="(T) True",
        data['ac2']==="(F) False",
        data['ac3']==="(F) False",
        data['ac4']==="(F) False",
        data['ac5']==="(4) 20993",
        data['ac6']==="(4) 12345",
      ];
      let noFailedQuestion = 0;
      conditions.forEach(val =>{
        if (!val) {
          noFailedQuestion ++;
        }
      });
      if (noFailedQuestion>2) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  submit(data){
    let pathIndex = Number(this.getCookieById('user_current_path_index'));
    let userId = this.cookieService.get('user_id');
    let gp = this.cookieService.get('user_gp');
    let path_id = this.cookieService.get('user_path_id');
    if(this.isQVTestResultFailed(data)){
      // fail the QVTest and delete all cookies
      this.http.post(`${this.requestUrl}/api/disqualify`, {
        gp: gp,
        userid: userId,
        path_id: path_id
      }).subscribe(res => {
        this.cookieService.deleteAll('/');
        this.http.get(`${this.requestUrl}/thank_you/thank_attention`).subscribe(
          data => {
            this.router.navigate(['complete', {userId: userId, ...data}])
          }
        )
      })
      return empty();
    };
    this.cookieService.set('user_current_path_index', String(pathIndex+1),undefined,'/');
    return this.http.post(`${this.requestUrl}/submit`, 
      {
        data: data,
        userId: userId,
      }
    ).pipe(
      catchError(this.handleError)
    )
  }
}

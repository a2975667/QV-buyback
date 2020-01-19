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
export class VideoService {
  requestUrl = environment.apiUrl;
  videoForm: BehaviorSubject<Object> = new BehaviorSubject({});
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
      this.videoForm.next(data);
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

  submit(data){
    let pathIndex = Number(this.getCookieById('user_current_path_index'));
    let userId = this.cookieService.get('user_id');

    this.cookieService.set('user_current_path_index', String(pathIndex+1),undefined,'/');
    return this.http.post(`${this.requestUrl}/submit-video-setting`,
      {
        data: data,
        userId: userId,
      }
    ).pipe(
      catchError(this.handleError)
    )
  }

}

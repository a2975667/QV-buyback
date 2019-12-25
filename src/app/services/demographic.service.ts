import { Injectable, EventEmitter, Output} from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class DemographicService {
  requestUrl = '';
  demoForm: BehaviorSubject<Object> = new BehaviorSubject({});
  constructor(
    private cookieService: CookieService,
    private http: HttpClient,
  ) { }
  requestForm(){
    let donationAPI = `${this.requestUrl}/api/demographic`;
    this.http.get(donationAPI).pipe(
      catchError(this.handleError)
    ).subscribe(data => {
      console.log(data);
      this.demoForm.next(data);
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
  getCookieById(id: string){
    return this.cookieService.get(id);
  }
  submit(data){
    let userId = this.getCookieById('user_id');

    let submitAPI = `${this.requestUrl}/submit-demographic`;
    return this.http.post(submitAPI,
      {
        userId: userId,
        data: data
      }).pipe(
      catchError(this.handleError)
    );
  }
}

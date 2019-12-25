import { Injectable, EventEmitter, Output} from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DonationService {
  requestUrl = '';
  organizations: BehaviorSubject<Array<Object>> = new BehaviorSubject([]);
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private route: Router,
  ) { }
  requestOrganizations(){
    let donationAPI = `${this.requestUrl}/api/donation`;
    this.http.get(donationAPI).pipe(
      catchError(this.handleError)
    ).subscribe(data => {
      this.organizations.next(data['donation']);
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
    let pathArray: Array<object> = JSON.parse(this.getCookieById('user_path'));
    let pathIndex = Number(this.getCookieById('user_current_path_index'))+1;
    let completeJsonAPI = `${this.requestUrl}/thank_you/${pathArray[pathIndex]['file']}`;
    this.http.get(completeJsonAPI).subscribe(completeJSON=>{
      let userId = this.getCookieById('user_id');
      this.cookieService.deleteAll('/');
      let submitAPI = `${this.requestUrl}/submit-donation`;
      this.http.post(submitAPI,{
        donation: data,
        userId: userId,
      }).pipe(
        catchError(this.handleError)
      ).subscribe(result => {
        this.route.navigate(['complete',{...completeJSON, userId: userId}])
      })
    })

  }
}

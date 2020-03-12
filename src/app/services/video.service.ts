import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError, Observable, empty} from 'rxjs';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Video } from '../schema/video';
@Injectable({
  providedIn: 'root'
})
export class VideoService {
  requestUrl = environment.apiUrl;
  videoForm: BehaviorSubject<Video> = new BehaviorSubject(null);
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
    ).subscribe((data: Video) => {
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
  }

  submit(data) {
    const pathIndex = Number(this.getCookieById('user_current_path_index'));
    const userId = this.cookieService.get('user_id');
    this.cookieService.set('user_current_path_index', String(pathIndex + 1), undefined, '/');
    return this.http.post(`${this.requestUrl}/submit-video-setting`,
      {
        data,
        userId,
      }
    ).pipe(
      catchError(this.handleError)
    );
  }
}

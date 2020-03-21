import { Injectable, EventEmitter, Output} from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { User } from '../schema/user';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Questionnaire } from '../schema/questionnaire';
import { CookieService } from 'ngx-cookie-service';
import { submitPostSchema } from '../schema/submitPostSchema';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

function calTotalCredits(votesArray) {
  let qTotalUsedCredits = 0;
  votesArray.forEach(vote => {
    qTotalUsedCredits = qTotalUsedCredits + Math.pow(vote, 2);
  });
  return qTotalUsedCredits;
}

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  requestUrl = environment.apiUrl;
  @Output() questionSet: EventEmitter<object> = new EventEmitter();
  @Output() votes: EventEmitter<Array<Array<number>>> = new EventEmitter();
  @Output() usedCredits: EventEmitter<Array<number>> = new EventEmitter();
  votesContent: Array<Array<number>>;
  usedCreditsArray: Array<number>;
  questionnaire: Questionnaire;
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router,
  ) {}

  checkRoute() {
    const pathIndex = Number(this.cookieService.get('user_current_path_index'));
    const pathArray: Array<object> = JSON.parse(this.cookieService.get('user_path'));
    const type: string = pathArray[pathIndex]['type'];

    if (type === 'normal') {
      this.router.navigate(['likert']);
    } else if (type === 'video') {
      this.router.navigate(['video']).then(() => location.reload());
    } else if (type === 'complete') {
      const userID = this.cookieService.get('user_id');
      this.cookieService.deleteAll('/');
      const file = pathArray[pathIndex]['file'];
      this.http.get(`${this.requestUrl}/thank_you/${file}`).subscribe(
        thankYouData => {
          this.router.navigate(['complete', {userId: userID, ...thankYouData}]);
        }
      );
    } else if (type === 'qv') {
      return true;
    }
    return false;
  }

  getUserID(userGP: string) {
    return this.http.post<User>(`${this.requestUrl}/createUser`, {gp: userGP})
    .pipe(
      catchError(this.handleError)
    );
  }

  getCookieById(id: string) {
    return this.cookieService.get(id);
  }

  setCookieById(id: string, val: string) {
    this.cookieService.set(
      id,
      val,
      undefined,
      '/',
      undefined,
      false,
      'Lax'
      );
  }

  getCurrentPath(): string {
    const pathIndex = Number(this.getCookieById('user_current_path_index'));
    const pathArray: Array<object> = JSON.parse(this.getCookieById('user_path'));
    return pathArray[pathIndex]['file'];
  }

  generateSubmitPost(completeFlag: boolean) {
    const submitPost: submitPostSchema = {} as submitPostSchema;
    submitPost.complete_flag = completeFlag;
    submitPost.file_name = this.getCurrentPath();
    const currentQuestion = this.getCookieById('user_current_question_index');
    submitPost.qid = this.questionnaire.question_list[currentQuestion].qid;
    submitPost.results = this.votesContent[this.getCookieById('user_current_question_index')];
    submitPost.user_id = this.getCookieById('user_id');
    return submitPost;
  }

  update(): void {
    this.usedCredits.emit(this.usedCreditsArray);
    this.votes.emit(this.votesContent);
  }

  modifyVotesByID(qId, oId, value) {
    this.votesContent[qId - 1][oId - 1] = value;
    this.usedCreditsArray[qId - 1] = calTotalCredits(this.votesContent[qId - 1]);
    this.update();
  }

  getQuestionnaire() {
    if (this.checkRoute()) {
      const path = this.getCurrentPath();
      const result = this.http.get(`${this.requestUrl}/api/qv/${path}`)
      .pipe(
        catchError(this.handleError)
      );
      const currentQuestion = this.getCookieById('user_current_question_index');
      result.subscribe((data: Questionnaire) => {
        const height = data.question_list.length;
        const votesArray = [];
        for (let i = 0; i < height; i++) {
          votesArray.push(new Array(data.question_list[i].options.length).fill(0));
        }
        this.votesContent = votesArray;
        this.usedCreditsArray = new Array(height).fill(0);
        this.update();
        this.questionSet.emit({currentQuestion: Number(currentQuestion), ...data});
        this.questionnaire = data;
      });
    }
    return;
  }

  submit(finalQuestionValue: string) {
    let nextQuestionIndex: number = Number(this.getCookieById('user_current_question_index')) + 1;
    const submitData: submitPostSchema = this.generateSubmitPost(false);
    const pathArray: Array<object> = JSON.parse(this.getCookieById('user_path'));
    const pathIndex = Number(this.getCookieById('user_current_path_index'));

    if (nextQuestionIndex >= this.questionnaire.question_list.length) {
      nextQuestionIndex = 0;
      this.setCookieById('user_current_path_index', String(pathIndex + 1));
      this.router.navigate([this.router.url]);
      if (pathArray[pathIndex + 1]['type'] === 'donation') {
        submitData.complete_flag = true;
        return this.http.post(`${this.requestUrl}/submit`,
        {submitData, finalQuestion: finalQuestionValue}).pipe(
          catchError(this.handleError)
        ).subscribe(data => {
          this.router.navigate(['donation']);
        });
      }
    }

    if (pathArray[pathIndex + 1]['type'] === 'normal') {
      nextQuestionIndex = 0;
      this.setCookieById('user_current_question_index', String(nextQuestionIndex));
      return this.http.post(`${this.requestUrl}/submit`, submitData).pipe(
        catchError(this.handleError)
      ).subscribe(data => {
        this.router.navigate(['likert']);
      });
    } else {
      this.setCookieById('user_current_question_index', String(nextQuestionIndex));
      this.getQuestionnaire();

      return this.http.post(`${this.requestUrl}/submit`, submitData).pipe(
        catchError(this.handleError)
      ).subscribe(data => {
      });
    }
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.log(error);
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}

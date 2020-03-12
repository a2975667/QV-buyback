import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { GlobalService } from '../services/global.service';
import { User } from '../schema/user';
import { Questionnaire } from '../schema/questionnaire'
import { Question } from '../schema/question';
import { Router } from '@angular/router';
@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  questionnaire: Questionnaire;
  currentQuestionNum = 0;
  currentFileNum = 1;
  numQuestion = 1;
  numFile = 1;
  questionTitle: string;
  questionDes: string;
  constructor(
    private gService: GlobalService,
    private route: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    const pathIndex = Number(this.cookieService.get('user_current_path_index'));
    const pathArray: Array<object> = JSON.parse(this.cookieService.get('user_path'));
    console.log(pathArray[pathIndex]);
    const type: string = pathArray[pathIndex]['type'];
    if (type === 'normal') {
      this.route.navigate(['likert']);
    } else if (type === 'qv') {
      this.gService.questionSet.subscribe((data: Questionnaire) => {
        this.questionnaire = data;
        this.currentQuestionNum = data.currentQuestion;
        this.numQuestion = data.question_list.length;
        const questionContent = data.question_list[this.currentQuestionNum];
        this.questionDes = questionContent.description;
        this.questionTitle = questionContent.question;
        this.numFile = pathArray.length;
        this.currentFileNum = pathIndex + 1;
      });
      this.gService.getQuestionnaire();
    } else if (type === 'video') {
      this.route.navigate(['video']).then(() => location.reload());
    } else if (type === 'complete') {
      const userID = this.cookieService.get('user_id');
      this.cookieService.deleteAll('/');
      this.route.navigate(['complete', {userId: userID, text: null, title: null }]);
    }
  }
}

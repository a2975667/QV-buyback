import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import * as Survey from "survey-angular";
interface jsonInput {
  questions: object,
  showNav: boolean,
}
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  @Output() resultEmit: EventEmitter<any> = new EventEmitter();
  @Output() suveyModel: EventEmitter<Survey.Model> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }



  @Input()
  set json(value: jsonInput) {
    const that = this;
    const surveyModel = new Survey.Model(value.questions);
    surveyModel.showCompletedPage = false;
    Survey.SurveyNG.render('surveyElement', {
      model: surveyModel,
      isExpanded: true
    });
    surveyModel.showNavigationButtons = value.showNav;
    that.suveyModel.emit(surveyModel);
    surveyModel.onComplete.add((sender, options) => {
      that.resultEmit.emit(sender.data);
    });
  }
}

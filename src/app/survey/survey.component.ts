import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import * as Survey from "survey-angular";

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() resultEmit: EventEmitter<any> = new EventEmitter();
  @Input()
  set json(value: object) {
    const that = this;
    const surveyModel = new Survey.Model(value);
    surveyModel.showCompletedPage = false;
    Survey.SurveyNG.render("surveyElement", {
      model: surveyModel,
      isExpanded: true
    });

    surveyModel.onComplete.add(function (sender, options) {
      console.log(sender.data)
      that.resultEmit.emit(sender.data);
    });
  }
}

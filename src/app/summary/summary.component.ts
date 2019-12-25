import { Component, OnInit, ViewChild } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { Questionnaire } from '../schema/questionnaire';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  usedCredits: number = 0;
  totalCredits: number;
  percentage: number = 0;
  type: string;
  @ViewChild('confirmSubmit',{static: true}) private confirmSubmitSwal: SwalComponent;
  @ViewChild('submitSuccess', {static: true}) private submitSuccessSwal: SwalComponent;
  constructor(
    private gService: GlobalService,
  ) { }
  submit() {
    if(this.usedCredits == 0) {
      this.confirmSubmitSwal.fire();
    }else{
      this.submitSuccessSwal.fire();
    }
  }
  ngOnInit() {
    this.gService.questionSet.subscribe((data: Questionnaire) =>{
      this.totalCredits = data.question_list[data.currentQuestion].totalCredits;
      this.gService.usedCredits.subscribe(usedCredits=>{
        this.usedCredits = usedCredits[data.currentQuestion];
        let percentage = (this.usedCredits/this.totalCredits)*100;
        this.type = 'info';
        this.percentage = percentage;
      })
    })
    
  }

}

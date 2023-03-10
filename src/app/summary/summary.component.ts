import { Component, OnInit, ViewChild } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { Questionnaire } from '../schema/questionnaire';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { FormControl, Validators } from '@angular/forms';
import { SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  usedCredits = 0;
  totalCredits: number;
  percentage = 0;
  type: string;
  submitForm = new FormControl('', [Validators.required, Validators.minLength(20)]);
  @ViewChild('confirmSubmit', {static: true}) confirmSubmitSwal: SwalComponent;
  @ViewChild('submitSuccess', {static: true}) submitSuccessSwal: SwalComponent;
  constructor(
    public readonly swalTargets: SwalPortalTargets,
    protected gService: GlobalService,
  ) {}

  submitFinalForm() {
    this.submitSuccessSwal.dismiss().then(
      () => this.gService.submit(this.submitForm.value)
    );
  }

  submit() {
    if (this.usedCredits === 0) {
      this.confirmSubmitSwal.fire();
    } else {
      this.submitSuccessSwal.fire();
    }
  }

  ngOnInit() {
    this.gService.questionSet.subscribe((data: Questionnaire) => {
      this.totalCredits = data.question_list[data.currentQuestion].totalCredits;
      this.gService.usedCredits.subscribe(usedCredits => {
        this.usedCredits = usedCredits[data.currentQuestion];
        const percentage = (this.usedCredits / this.totalCredits) * 100;
        this.type = 'info';
        this.percentage = percentage;
      });
    });

  }

}

import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { Questionnaire } from '../schema/questionnaire'
import { Option } from '../schema/option';
@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {

  votes: Array<number>;
  currentOptions: Array<Option>;
  totalCredits: number;
  currentQuestionIndex: number;
  constructor(
    private gService: GlobalService,
  ) { }

  shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  ngOnInit() {
    this.gService.questionSet.subscribe((data: Questionnaire) => {
      this.currentQuestionIndex = data.currentQuestion;
      const currentQuestion = data.question_list[this.currentQuestionIndex];
      this.currentOptions = currentQuestion.options;
      this.currentOptions = this.shuffle(this.currentOptions);
      this.votes = new Array(this.currentOptions.length).fill(0);
      this.totalCredits = currentQuestion.totalCredits;
      this.gService.votes.subscribe(votes => {
        this.votes = votes[this.currentQuestionIndex];
      });
    });
  }

  calCurrentTotalCredits() {
    let totalCredit = 0;
    this.votes.forEach(vote => {
      totalCredit = totalCredit + vote * vote;
    });
    return totalCredit;
  }

  isDisabled(index: number, isMinus: boolean) {
    const currentDirection = isMinus ? this.votes[index] <= 0 : this.votes[index] >= 0;
    const currentCredits = this.calCurrentTotalCredits();
    const difference = Math.pow((Math.abs(this.votes[index]) + 1), 2) - Math.pow(this.votes[index], 2);
    const isNextPossibleTotalCreditsOK = currentCredits + difference > this.totalCredits;
    return currentDirection && isNextPossibleTotalCreditsOK;
  }

  modifyVotesByID(oIndex, value) {
    const originalVote = this.gService.votesContent[
      this.currentQuestionIndex
    ][
      oIndex
    ];
    this.gService.modifyVotesByID(this.currentQuestionIndex + 1, oIndex + 1, originalVote + value);
  }
}

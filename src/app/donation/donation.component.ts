import { Component, OnInit } from '@angular/core';
import { DonationService } from '../services/donation.service';
import { isNull } from 'util';

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})

export class DonationComponent implements OnInit {
  MAX = 35;
  organizations: Array<Object> = [];
  sum: number = 0;
  donations;
  constructor(
    private donationService: DonationService
  ) { }

  ngOnInit() {
    let ogObserver = {
      next: ogs => {
        this.organizations=shuffle(ogs)
        this.donations = {}
        this.organizations.forEach(v => {
          this.donations[v['orgId']] = 0;
        })
      },
      error: error => console.log('A error: ' + error),
      complete: () => console.log('ogObserver complete!')
    }
    this.donationService.organizations.subscribe(ogObserver)
    this.donationService.requestOrganizations();
  }
  caculate(orgId){
    this.sum = 0;
    Object.keys(this.donations).forEach(key => {
      this.sum = this.sum + this.donations[key];
    });
    if(this.sum > this.MAX){
      this.donations[orgId] = this.donations[orgId]-(this.sum - this.MAX)
      this.sum = this.MAX;
    }
  }
  submit(){
    Object.keys(this.donations).forEach(key => {
      if(isNull(this.donations[key])){
        this.donations[key] = 0;
      }
    });
    this.donationService.submit(this.donations);
  }
}

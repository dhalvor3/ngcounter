import { Component, OnInit } from '@angular/core';
import { Counter } from '../counter';
import { SuperCounter } from '../super-counter';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {

  counters: Counter[];  
  superCounters: SuperCounter[];
  name = 'Counter Wall';

  constructor() {
    this.counters=[];
    this.superCounters= [];
   }

   ngOnInit() {
  }

  create() {
    if (this.counters.length === 5) {
      this.upGradeCounter();
    } else {
        const counter = new Counter();
        this.counters.push(counter);
    }
  }

  upGradeCounter() {
    let sum = 0;
    for (let index = 0; index < this.counters.length; index++) {
      sum += this.counters[index].value;
    }
    this.counters = [];
//    const superCounter = new SuperCounter();
    this.superCounters.push(new SuperCounter());
    this.superCounters[this.superCounters.length - 1].value = sum;
  }

}

import { Component, OnInit } from '@angular/core';
import { Counter } from '../counter';

@Component({
  selector: 'counter',
  templateUrl: './counter-detail-component.component.html',
  styleUrls: ['./counter-detail-component.component.css']
})
export class CounterDetailComponentComponent implements OnInit {

  counters: Counter;
  constructor() {  
  }

  Increment() {
    this.counters.value++;
  }

  Decrement() {
    if (this.counters.value > 0) {
      this.counters.value--;
    } else {
      console.log('error - value would be < 0');
    }
  }


  ngOnInit(): void {
  }

}

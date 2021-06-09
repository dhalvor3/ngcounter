import { Component, Input, OnInit } from '@angular/core';
import { Counter } from '../counter';

@Component({
  selector: 'counter',
  templateUrl: './counter-detail-component.component.html',
  styleUrls: ['./counter-detail-component.component.css']
})
export class CounterDetailComponentComponent implements OnInit {

  @Input() counter: Counter;
  constructor() {  
  }

  Increment() {
    this.counter.value++;
  }

  Decrement() {
    if (this.counter.value > 0) {
      this.counter.value--;
    } else {
      console.log('error - value would be < 0');
    }
  }


  ngOnInit(): void {
  }

}

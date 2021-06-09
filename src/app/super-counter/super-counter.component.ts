import { Component, OnInit, Input } from '@angular/core';
import { SuperCounter } from '../super-counter';

@Component({
  selector: 'app-super-counter',
  templateUrl: './super-counter.component.html',
  styleUrls: ['./super-counter.component.css']
})
export class SuperCounterComponent implements OnInit {

  @Input() supercounter: SuperCounter = new SuperCounter;
  constructor() { }

  ngOnInit(): void {
  }

  Increment() {
    this.supercounter.value += 3;
  }

  Decrement() {
    if (this.supercounter.value > 0) {
      this.supercounter.value -= 3;
    } 
  }
}

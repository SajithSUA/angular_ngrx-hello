import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from '../state/counter.action';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custome-counter-input',
  templateUrl: './custome-counter-input.component.html',
  styleUrls: ['./custome-counter-input.component.css']
})
export class CustomeCounterInputComponent implements OnInit {

  value: number = 0;

  constructor(private store: Store<{ counter: CounterState }>) { }

  ngOnInit(): void {
  }

  onAdd() {
    this.store.dispatch(customIncrement({ count: +this.value }));
  }
}

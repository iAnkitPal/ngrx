import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DECREMENT, INCREMENT, RESET } from '../../states/counter.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counter: Observable<{count:number}>;
  constructor(private store: Store<{ counter: { count: number } }>) {
    this.counter = this.store.select('counter');

  }


  getCount() {
  }

  increment(): void {
    this.store.dispatch(INCREMENT());
  }
  decrement(): void {
    this.store.dispatch(DECREMENT());
  }
  reset(): void {
    this.store.dispatch(RESET());
  }
}

import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DECREMENT, INCREMENT, RESET, SETCOUNTVALUE } from '../../states/counter.actions';
import { Observable } from 'rxjs';
import { Count } from './counter.types';
import { getCounter } from '../../states/counter.selector';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counter: Observable<Count>;
  constructor(private store: Store<{ counter: Count }>) {
    this.counter = this.store.select(getCounter);
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
  set(v:string): void {
    this.store.dispatch(SETCOUNTVALUE({value:+v}));
  }
}

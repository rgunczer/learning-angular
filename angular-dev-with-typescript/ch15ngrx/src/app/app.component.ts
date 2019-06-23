import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { INCREMENT, DECREMENT } from './reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // counter = 0;
  counter$: Observable<number>;

  constructor(
    private store: Store<any>
  ) {
    this.counter$ = store.select('counterState');
  }

  increment() {
    // this.counter++;
    // this.store.dispatch({type: INCREMENT});
    this.store.dispatch(INCREMENT());
  }

  decrement() {
    // this.counter--;
    // this.store.dispatch({type: DECREMENT});
    this.store.dispatch(DECREMENT());
  }
}

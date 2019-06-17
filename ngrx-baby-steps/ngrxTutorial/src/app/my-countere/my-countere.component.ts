import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';

@Component({
  selector: 'app-my-countere',
  templateUrl: './my-countere.component.html',
  styleUrls: ['./my-countere.component.css']
})
export class MyCountereComponent implements OnInit {

  count$: Observable<number>;

  constructor(private store: Store<{ count: number}>) {
    this.count$ = store.pipe(select('count'));
  }

  ngOnInit() {
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}

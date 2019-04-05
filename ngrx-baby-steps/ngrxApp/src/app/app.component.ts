import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddIngredient } from './store/shopping-list.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrxApp';
  ingredients: Observable<any>;

  constructor(
    private store: Store<{shoppingList: { ingredients: { name: string, quantity: number}[]}}>) {
      this.ingredients = store.select('shoppingList');
  }

  add() {
    this.store.dispatch(
      new AddIngredient({name: 'cucumber', quantity: 2})
    );
  }
}

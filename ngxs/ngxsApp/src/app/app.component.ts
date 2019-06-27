import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from './shared/app.state';
import { Store, Select } from '@ngxs/store';
import { SetUsername } from './shared/app.actions';
import { Navigate } from './shared/router.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // state$: Observable<AppState>;
  // @Select() app$:

  constructor(
    private store: Store
  ) {
    // this.state$ = this.store.select(state => state.app);
  }

  clickHandler(username) {
    this.store.dispatch([
      new SetUsername(username),
      new Navigate('salad/order')
    ]);
  }
}

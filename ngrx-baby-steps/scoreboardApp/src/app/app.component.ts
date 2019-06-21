import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromScoreboard from './scoreboard-page.reducer';
import { homeScore, awayScore, resetScore } from './scoreboard-page.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scoreboardApp';
  game$: Observable<fromScoreboard.State>;

  constructor(private store: Store<fromScoreboard.State>) {
    this.game$ = store.pipe(select('game'));
  }

  home() {
    this.store.dispatch(homeScore());
  }

  away() {
    this.store.dispatch(awayScore());
  }

  reset() {
    this.store.dispatch(resetScore());
  }

}

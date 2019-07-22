import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'ngrxDeborahStarter';
  isToggled: boolean;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.pipe(select('app')).subscribe(app => {
      console.log('received update from store');
      if (app) {
        this.isToggled = app.showCode;
      }
    });
  }

  onChange(value: boolean): void {
    console.log('onChange: ' + value);
    this.store.dispatch({
      type: 'TOGGLE_CODE',
      payload: value
    });
  }

  toggle() {
    console.log('toggle');
    this.store.dispatch({
      type: 'TOGGLE_CODE',
      payload: true
    });
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html'
})
export class DynamicComponent implements OnInit, OnDestroy {

  storeValue: boolean;
  storeSubs;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.storeSubs = this.store.pipe(select('app')).subscribe(app => {
      if (app) {
        this.storeValue = app.showCode;
      }
    });
  }

  ngOnDestroy() {
    // this.storeSubs.uns
  }

}

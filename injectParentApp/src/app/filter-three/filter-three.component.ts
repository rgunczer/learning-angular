import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-filter-three',
  templateUrl: './filter-three.component.html',
  styles: []
})
export class FilterThreeComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit::FilterThreeComponent');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy::FilterThreeComponent');
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-filter-two',
  templateUrl: './filter-two.component.html',
  styles: []
})
export class FilterTwoComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit::FilterTwoComponent');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy::FilterTwoComponent');
  }

}

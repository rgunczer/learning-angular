import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html'
})
export class TestCompComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('TestComp::ngOnInit');
  }

  ngOnDestroy() {
    console.log('TestComp::ngOnDestroy');
  }

}

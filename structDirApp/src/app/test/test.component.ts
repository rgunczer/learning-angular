import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('TestComponent::ngOnInit');
  }

  ngOnDestroy() {
    console.log('TestComponent::ngOnDestroy');
  }

}

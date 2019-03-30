import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dyn-comp',
  templateUrl: './dyn-comp.component.html'
})
export class DynCompComponent implements OnInit, OnDestroy {

  title = 'default';

  constructor() { }

  ngOnInit() {
    console.log('DynCompComponent::ngOnInit');
  }

  ngOnDestroy() {
    console.log('DynCompComponent::ngOnDestroy');
  }

}

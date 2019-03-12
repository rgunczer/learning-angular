import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-one',
  templateUrl: './filter-one.component.html',
  styles: []
})
export class FilterOneComponent implements OnInit, OnDestroy {

  @Output() talkBack = new EventEmitter<any>();

  data: any;

  constructor() { }

  ngOnInit() {
    this.data = Math.random();
    console.log('ngOnInit::FilterOneComponent');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy::FilterOneComponent');
  }

  talk() {
    this.talkBack.emit({msg: this.data});
  }

}

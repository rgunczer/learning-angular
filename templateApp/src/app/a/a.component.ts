import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html'
})
export class AComponent implements OnInit {

  @Input() templateRef: TemplateRef<any>;

  names = [
    'Joel',
    'Ellie',
    'Tess',
    'Aloy'
  ];

  constructor() { }

  ngOnInit() {
  }

  get tabsContext() {
    return {
      tabs: this.names
    };
  }

}

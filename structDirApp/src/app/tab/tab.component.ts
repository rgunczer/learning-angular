import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html'
})
export class TabComponent implements OnInit {

  @Input() title = 'default';

  selected = false;

  constructor() { }

  ngOnInit() {
  }

}

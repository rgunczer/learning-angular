import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-view-container-test',
  templateUrl: './view-container-test.component.html'
})
export class ViewContainerTestComponent implements OnInit {

  @ViewChild('someTemplate', { read: TemplateRef } ) template: TemplateRef<any>;
  @ViewChild('container', { read: ViewContainerRef }) vc: ViewContainerRef;

  constructor() { }

  ngOnInit() {

  }

  create() {
    this.vc.createEmbeddedView(this.template);
  }

  destroy() {
    this.vc.clear();
  }

}

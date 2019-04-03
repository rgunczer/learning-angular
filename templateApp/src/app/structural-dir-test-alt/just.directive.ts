import { Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[just]' // tslint:disable-line
})
export class JustDirective implements OnInit {

  show = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {
  }

  ngOnInit() {
    if (this.show) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

}

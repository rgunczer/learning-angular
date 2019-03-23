import { Directive, TemplateRef, OnInit } from '@angular/core';
import { NavService } from './nav.service';

@Directive({
  selector: '[leftNav]' // tslint:disable-line
})
export class LeftNavDirective implements OnInit {

  constructor(private tmpl: TemplateRef<any>, private nav: NavService) { }

  ngOnInit() {
    this.nav.setTemplate(this.tmpl);
  }
}

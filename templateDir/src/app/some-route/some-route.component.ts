import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit } from '@angular/core';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-some-route',
  templateUrl: './some-route.component.html',
  styleUrls: ['./some-route.component.css']
})
export class SomeRouteComponent implements OnInit, AfterViewInit {

  @ViewChild('myTemplate') tmpl: TemplateRef<any>;

  constructor(private navService: NavService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('SomeRouteComponent::AfterViewInit');
    console.log(this.tmpl);
    this.navService.setTemplate(this.tmpl);
  }

}

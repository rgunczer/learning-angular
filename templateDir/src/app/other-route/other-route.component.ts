import { Component, OnInit, AfterViewInit, TemplateRef, ViewChild } from '@angular/core';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-other-route',
  templateUrl: './other-route.component.html',
  styleUrls: ['./other-route.component.css']
})
export class OtherRouteComponent implements OnInit, AfterViewInit {

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

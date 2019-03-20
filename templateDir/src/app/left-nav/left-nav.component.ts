import { Component, OnInit, ViewChild, ViewContainerRef, AfterViewInit, TemplateRef } from '@angular/core';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit, AfterViewInit {

  @ViewChild('myContainer', { read: ViewContainerRef }) vcr: ViewContainerRef;

  ref: any = null;

  constructor(private navService: NavService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

    this.navService.state.subscribe((tpl: TemplateRef<any>) => {
      if (this.ref !== null) {
        this.ref.destroy();
      }

      if (tpl !== null) {
        this.ref = this.vcr.createEmbeddedView(tpl);
      }
    });

  }

}

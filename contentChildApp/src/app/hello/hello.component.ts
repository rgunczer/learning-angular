import { Component, OnInit, ContentChild, AfterContentInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html'
})
export class HelloComponent implements OnInit, AfterContentInit {

  @ContentChild(FooterComponent) footer: FooterComponent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log('HelloComponent::ngAfterContentInit');
    this.footer.text = 'Yeeee!';
  }

}

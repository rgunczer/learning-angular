import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

import { BroadcastService } from '../broadcast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  title = 'HomeComponentTitle';
  // onHomieFn: Function;

  constructor(private broadcastService: BroadcastService) { }

  ngOnInit() {
    console.log('Home::ngOnInit');

    // this.onHomieFn = this.onHomie.bind(this);

    this.broadcastService.subscribe('homie', this.onHomie);
  }

  private onHomie = () => {
    console.log('Home::homie ' + this.title);
  }

  broadcast() {
    this.broadcastService.publish('homie');
  }

  ngOnDestroy() {
    this.broadcastService.unsubscribe('homie', this.onHomie);
    console.log('Home::ngOnDestroy');
  }

}

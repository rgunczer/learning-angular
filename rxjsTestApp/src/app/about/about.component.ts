import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private eventBus: EventBusService) { }

  ngOnInit() {
    this.eventBus.subscribe('jancsi')
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe( message => {
        console.log('received jancsi: ', message);
      });

    this.eventBus.subscribe('vodka')
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(message => {
        console.log('received vodka: ', message);
      });
  }

  sendMessage(channel: string, msg: string): void {
    this.eventBus.publish(channel, msg);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}

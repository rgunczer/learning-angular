import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private messages: MessageService) { }

  ngOnInit() {
    this.messages.getMessage()
      .pipe(
        takeUntil(this.ngUnsubscribe)
      )
    .subscribe( message => {
      console.log('received: ', message);
    });
  }

  sendMessage() {
    this.messages.sendMessage('jancsi');
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}

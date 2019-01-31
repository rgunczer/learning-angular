import { Injectable } from '@angular/core';
import { Subject, Subscription, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { Event } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  private subject = new Subject<any>();

  constructor() { }

  publish(name: string, payload: any) {
    const msg = new Event(name, payload);
    this.subject.next(msg);
  }

  subscribe(channel: string): Observable<any> {
    return this.subject
      .pipe(
        filter((msg: Event) => msg.name === channel),
        map((msg: Event) => msg.payload)
      );
  }

}

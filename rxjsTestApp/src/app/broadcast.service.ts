import { Injectable } from '@angular/core';
import { Subject, from } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BroadcastService {

    listeners = {};
    eventsSubjects = new Subject();
    events = from(this.eventsSubjects);

    constructor() {
        this.events.subscribe(
            ({name, args}) => {
                if (this.listeners[name]) {
                    for (const listener of this.listeners[name]) {
                        listener(...args);
                    }
                }
            }
        );
    }

    subscribe(name: string, listener: Function): void {
        if (!this.listeners[name]) {
            this.listeners[name] = [];
        }
        this.listeners[name].push(listener);
    }

    unsubscribe(name: string, listener: Function) {
      debugger;
      this.listeners[name] = this.listeners[name].filter(x => x !== listener);
      debugger;
    }

    publish(name: string, ...args: any[]): void {
        this.eventsSubjects.next({ name, args });
    }

}

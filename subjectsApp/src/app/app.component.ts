import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

import { PersonApiService } from './person-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'subjectsApp';
  subject: Subject<string>;
  behaviorSubject: BehaviorSubject<string>;
  replaySubject: ReplaySubject<string>;

  constructor(private personApi: PersonApiService) {}

  ngOnInit() {
    this.personApi.getPersons(); // .subscribe(x => console.log(x));
    this.subject = new Subject();

    setTimeout(() => {
      this.subject.next('joel');
    });

    this.subject.subscribe((value: string) => {
      console.log(`got: ${value}`);
    });

    this.behaviorSubject = new BehaviorSubject('first');

    this.behaviorSubject.subscribe((value: string) => {
      console.log(`behavior subject:  ${value}`);
    });

    this.replaySubject = new ReplaySubject(3);

    this.replaySubject.subscribe((value: string) => {
      console.log(`replay subject: ${value}`);
    });

    this.replaySubject.next('apple');
    this.replaySubject.next('kiwi');
    this.replaySubject.next('banana');
  }

  addNewSubscriberFor(type: string): void {
    this.replaySubject.subscribe((value: string) => {
      console.log(`new subscriber: ${value}`);
    });
  }

  emitNewValue(type: string, value: string): void {
    this.replaySubject.next(value);
  }

}

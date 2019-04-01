import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { CommonApiService } from './common-api.service';

function getRndInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'facadeApp';

  subject = new Subject<number>();

  constructor(private commonApi: CommonApiService) {
    this.subject
    .pipe(
      tap((num: number) => console.log('got: ', num)),
      filter((num: number) => num > 3)
    )
    .subscribe(
      (num: number) => {
        console.log('the number is:', num);
      }
    );
  }

  ngOnInit() {
    console.log('AppComponent::ngOnInit');
    this.commonApi.getFilms()
      .subscribe(
        (films: any) => {
          console.log('received films:', films);
        }
      );
  }

  send() {
    this.subject.next(getRndInteger(1, 9));
  }
}
import { Component, OnInit } from '@angular/core';
import { CommonApiService } from './common-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'facadeApp';

  constructor(private commonApi: CommonApiService) {

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

}

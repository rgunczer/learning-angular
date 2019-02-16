import { Component, Inject } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjsTestApp';

  constructor(@Inject('myCfgValue') private myConfigValue: string) {
    console.log('ctor: ', myConfigValue);
    console.log('new uid: ', uuid());
  }
}

import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  title = 'formsAgain';

  onRedial() {
    console.log('on Redial');
  }

}

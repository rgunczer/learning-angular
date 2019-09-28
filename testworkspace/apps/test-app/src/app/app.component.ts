import { Component } from '@angular/core';

@Component({
  selector: 'testworkspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  counter = 0;

  test() {
    ++this.counter;

    if (this.counter === 10) {
      debugger;
      alert('test');
    }
  }
}

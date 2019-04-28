import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'hostBindingApp';
  cards = [
    {
      id: 1,
      name: 'card 1'
    },
    {
      id: 2,
      name: 'card 2'
    },
    {
      id: 3,
      name: 'card 3'
    }
  ];
}

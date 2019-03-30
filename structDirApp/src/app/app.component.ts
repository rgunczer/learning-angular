import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  condition = true;
  europeOnly = false;
  countries = [
    {
      name: 'France',
      continent: 'europe'
    },
    {
      name: 'Germany',
      continent: 'europe'
    },
    {
      name: 'USA',
      continent: 'north-america'
    },
    {
      name: 'Brazil',
      continent: 'south-america'
    }
  ]
}

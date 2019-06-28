import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, Select } from '@ngxs/store';
import { AddAnimal } from './animal.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testApp';
  @Select(state => state.animalz) animals$: Observable<string[]>;

  constructor(private store: Store) {

  }

  onAddAnimal(name: string): void {
    this.store.dispatch(new AddAnimal(name));
  }

}

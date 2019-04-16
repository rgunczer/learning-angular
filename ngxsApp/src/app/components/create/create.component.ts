import { Component, OnInit } from '@angular/core';

import { Store } from '@ngxs/store';
import { AddUser } from 'src/app/actions/user.action';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {
  }

  addUser(name: string, email: string): void {
    this.store.dispatch(new AddUser({name, email}));
  }

}

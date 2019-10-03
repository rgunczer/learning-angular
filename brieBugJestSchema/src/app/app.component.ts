import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalContentComponent } from './modal-content/modal-content.component';

import * as _dictionary from '../assets/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'briebugJestSchema';
  bsModalRef: BsModalRef;
  private dictionary = _dictionary;

  constructor(private modalService: BsModalService) {
    console.log('here', this.dictionary.default.fruits);
  }

  clickMe() {
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(ModalContentComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}

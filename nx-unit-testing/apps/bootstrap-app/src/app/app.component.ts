import { Component } from '@angular/core';
import { ModalService } from './service/modal.service';
import { MessageBoxActionResults } from './_models';

@Component({
  selector: 'nx-unit-testing-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootstrap-app';

  constructor(
    private modalService: ModalService
  ) {
  }

  openModal() {
    // this.modalService.messageBox({
    //   title: 'TITLE',
    //   message: 'MESSAGE',
    //   buttons: [
    //     {
    //       action: 'ok',
    //       text: 'OK'
    //     }
    //   ]
    // }).subscribe((result: MessageBoxActionResults) => {
    //   console.log('result is: ', result);
    // });


    this.modalService.messageBox({
      title: 'some title',
      message: 'some question',
      buttons: [
        {
          text: 'yes',
          action: 'yes',
        },
        {
          text: 'no',
          action: 'no'
        }
      ]
    }).subscribe((result: MessageBoxActionResults) => {
      console.log('modal result is: ', result);
      if (result === 'yes') {
        this.doStuff();
      }
    });

  }

  doStuff() {
    console.log('doing stuff');
  }

}

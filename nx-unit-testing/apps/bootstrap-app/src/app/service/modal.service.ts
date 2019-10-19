import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// 3rd party
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

// models
import { MessageBoxParams, MessageBoxActionResults } from '../_models';

// component
import { MessageBoxComponent } from '../message-box/message-box.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private bsModalService: BsModalService
  ) {
  }

  messageBox(parameters: MessageBoxParams): Observable<MessageBoxActionResults> {

    const modalOptions: ModalOptions = {
      initialState: {
        parameters
      }
    }

    const modalRef: BsModalRef = this.bsModalService.show(MessageBoxComponent, modalOptions);
    return modalRef.content.onClose$; //.asObservable();
  }

}

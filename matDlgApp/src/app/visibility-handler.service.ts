import { Injectable } from '@angular/core';
import { Actions, ofActionDispatched } from '@ngxs/store';
import { ModalService } from './modal.service';
import { OpenColumnModal } from './store/employees.state';

@Injectable({
  providedIn: 'root'
})
export class VisibilityHandlerService {

  constructor(
    private modalService: ModalService,
    private actions: Actions) {
    this.actions.pipe(ofActionDispatched(OpenColumnModal)).subscribe(action => {
      console.log('here');
      this.modalService.openColumnVisibilityModal(null);
    });
  }

}

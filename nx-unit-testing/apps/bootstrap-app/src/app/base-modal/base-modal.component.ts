import { Component } from '@angular/core';
import { Subject, Observable } from 'rxjs';

// 3rd party
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'nx-unit-testing-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.css']
})
export class BaseModalComponent {

  onClose$: Subject<any>;

  constructor(
    protected bsModalRef: BsModalRef
  ) {
    this.onClose$ = new Subject();
  }

  closeWithResult(result: any): void {
    this.bsModalRef.hide();
    this.onClose$.next(result);
    this.onClose$.complete();
  }

}

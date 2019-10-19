import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

// 3rd party
import { BsModalRef } from 'ngx-bootstrap';

// model
import { MessageBoxParams } from '../_models';

// component
import { BaseModalComponent } from '../base-modal/base-modal.component';

@Component({
  selector: 'nx-unit-testing-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent extends BaseModalComponent implements OnInit {

  parameters: Partial<MessageBoxParams> = {};

  constructor(
    protected bsModalRef: BsModalRef,
  ) {
    super(bsModalRef);
  }

  ngOnInit() {
  }

  onClick(result: string) {
    this.closeWithResult(result);
  }

}

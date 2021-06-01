import { Component, OnInit } from '@angular/core';
import { BaseDialog } from '../base-dialog';

@Component({
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent extends BaseDialog implements OnInit {

  params: any;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  onAction(action: any): void {
    this.closeAndSendResult({result: action.id});
  }

}

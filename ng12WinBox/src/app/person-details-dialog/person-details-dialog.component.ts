import { Component, OnInit } from '@angular/core';
import { BaseDialog } from '../base-dialog';

@Component({
  templateUrl: './person-details-dialog.component.html',
  styleUrls: ['./person-details-dialog.component.scss']
})
export class PersonDetailsDialogComponent extends BaseDialog implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}

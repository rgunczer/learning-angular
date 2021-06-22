import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MessageBoxComponent>,
  ) {

  }

  ngOnInit(): void {
  }

  onOK() {
    this.dialogRef.close();
  }

}

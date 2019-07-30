import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface ColumnDialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-column-visibility-modal',
  templateUrl: './column-visibility-modal.component.html',
  styleUrls: ['./column-visibility-modal.component.css']
})
export class ColumnVisibilityModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ColumnVisibilityModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ColumnDialogData) {

  }

  ngOnInit() {
  }

  onClick() {
    console.log('onClick');
    this.dialogRef.close();
  }

}

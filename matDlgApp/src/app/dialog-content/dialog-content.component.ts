import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent implements OnInit {

  localAnimal: string;

  constructor(
    public dialogRef: MatDialogRef<DialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.localAnimal = data.animal;
  }

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onOkClick() {
    console.log('no thanks');
    this.dialogRef.close(this.localAnimal + 'AAA');
  }

}

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentComponent } from './dialog-content/dialog-content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'matDlgApp';
  name = 'zebra';
  animal = 'coca';

  constructor(public dialog: MatDialog) {}

  onPrimaryClick() {
    const dialogRef = this.dialog.open(DialogContentComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog was closed with: ', result);
      if (result) {
        this.animal = result;
      }
    });
  }

}

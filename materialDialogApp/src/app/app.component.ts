import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageBoxComponent } from './message-box/message-box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'materialDialogApp';

  constructor(
    public dialog: MatDialog
  ) {

  }

  onTest(): void {
    this.dialog.open(MessageBoxComponent, {
      height: '75vh'
    });
  }
}

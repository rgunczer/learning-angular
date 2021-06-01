import { Component } from '@angular/core';
import { DialogService } from './dialog.service';
import { MessageBoxComponent } from './message-box/message-box.component';

declare const WinBox: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng12WinBox';

  constructor(
    private dialog: DialogService
  ) {

  }

  onOpenDialog(): void {
    new WinBox('Untitled');
  }

  onOpenMessageBox(): void {
    this.dialog.messageBox('ok', 'Experimental Title', 'Important Message')
      .subscribe(
        result => {
          console.log('message-box result: ', result);
        }
      );
  }

  onOpenMessageBoxYesNo(): void {
    this.dialog.messageBox('yesno', 'Question Title', 'Important Decision Yes/No')
      .subscribe(
        result => {
          console.log('message-box result: ', result);
        }
      );
  }

  onFoo(): void {
    this.dialog.openDialog(MessageBoxComponent, { title: 'MessageBox Demo', modal: true, data: { message: 'Some message' } })
      .subscribe(result => {
        console.log('messageBox result: ', result);
      });
  }

}

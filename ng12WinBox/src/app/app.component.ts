import { Component } from '@angular/core';
import { DialogService } from './dialog.service';
import { MessageBoxComponent } from './message-box/message-box.component';
import { Person } from './person';
import { PersonDetailsDialogComponent } from './person-details-dialog/person-details-dialog.component';

declare const WinBox: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng12WinBox';

  rows: Person[] = [
    {
      id: 1,
      name: 'Maximillian',
      age: 12
    },
    {
      id: 2,
      name: 'Aloy',
      age: 19
    },
    {
      id: 3,
      name: 'Eredin',
      age: 30
    }
  ]


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

  onViewPerson(person: Person): void {
    this.dialog.openDialog(PersonDetailsDialogComponent, { title: person.name, modal: false, data: person })
      .subscribe(result => {
        console.log('messageBox result: ', result);
      });
  }

}

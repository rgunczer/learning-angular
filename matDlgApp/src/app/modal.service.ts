import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ColumnVisibilityModalComponent } from './column-visibility-modal/column-visibility-modal.component';


@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    public dialog: MatDialog
  ) {
  }

  openColumnVisibilityModal(columns): Observable<any> {
    const dialogRef = this.dialog.open(ColumnVisibilityModalComponent, {
      data: columns,
      width: '250px',
      // autoFocus: false,
      // hasBackdrop: true,
      // disableClose: true
    });

    // return dialogRef.afterClosed();
    // return dialogRef.afterClosed().pipe(take(1));
    return dialogRef.afterClosed(); // .pipe(take(1));
  }

}

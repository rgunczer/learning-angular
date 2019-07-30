import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

// modal dialogs
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { ColumnVisibilityModalComponent } from './column-visibility-modal/column-visibility-modal.component';

// store
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { EmployeesState } from './store/employees.state';

@NgModule({
  declarations: [
    AppComponent,
    DialogContentComponent,
    ColumnVisibilityModalComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    NgxsModule.forRoot([
      EmployeesState
    ], {
      developmentMode: true
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({ maxAge: 25 })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogContentComponent,
    ColumnVisibilityModalComponent
  ]
})
export class AppModule { }

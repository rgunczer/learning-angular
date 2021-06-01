import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { MessageBoxDialogComponent } from './message-box-dialog/message-box-dialog.component';
import { InputBoxDialogComponent } from './input-box-dialog/input-box-dialog.component';
import { PersonDetailsDialogComponent } from './person-details-dialog/person-details-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageBoxComponent,
    MessageBoxDialogComponent,
    InputBoxDialogComponent,
    PersonDetailsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

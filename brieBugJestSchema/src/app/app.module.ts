import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonsModule, ModalModule } from 'ngx-bootstrap';
import { ModalContentComponent } from './modal-content/modal-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot()
  ],
  entryComponents: [
    ModalContentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

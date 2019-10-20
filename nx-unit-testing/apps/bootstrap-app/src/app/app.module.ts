import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// 3rd party
import { ModalModule } from 'ngx-bootstrap';

// components
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MessageBoxComponent } from './message-box/message-box.component';
import { BaseModalComponent } from './base-modal/base-modal.component';

@NgModule({
  declarations: [AppComponent, MessageBoxComponent, BaseModalComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    ModalModule.forRoot(),
  ],
  providers: [],
  entryComponents: [
    MessageBoxComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
  ) {
  }
}

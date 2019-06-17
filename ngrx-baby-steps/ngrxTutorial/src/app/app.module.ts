import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { counterReducer } from './counter.reducer';
import { MyCountereComponent } from './my-countere/my-countere.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCountereComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count: counterReducer }),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

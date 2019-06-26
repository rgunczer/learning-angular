import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// store
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromScoreboard from './scoreboard-page.reducer';
import * as fromOther from './other-page.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(
      {
        game: fromScoreboard.reducer,
        other: fromOther.reducer
      },
      {
        runtimeChecks: {
          strictStateImmutability: true // <-- check state mutation
        }
      }
    ),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

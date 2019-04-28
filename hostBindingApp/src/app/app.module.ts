import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardHoverDirective } from './card-hover.directive';

import * as foo from './disable-developer-tools';

foo.disableDevTools();

// monkey patch console.log
(function() {
  const log = console.log;
  console.log = function() {
    log.apply(console, [(new Date().toString())].concat([].slice.call(arguments)));
  }
})();

console.log('here');

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardHoverDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

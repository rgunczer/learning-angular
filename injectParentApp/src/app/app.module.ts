import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilterOneComponent } from './filter-one/filter-one.component';
import { FilterTwoComponent } from './filter-two/filter-two.component';
import { FilterThreeComponent } from './filter-three/filter-three.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterOneComponent,
    FilterTwoComponent,
    FilterThreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

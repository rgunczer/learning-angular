import { BrowserModule } from '@angular/platform-browser';
import { NgModule, VERSION } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CurrencyMaskModule } from 'ng2-currency-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { NestedComponent } from './nested/nested.component';
import { CurrencyInputDirective } from './currency-input.directive';
import { CurrencyInput2Directive } from './currency-input2.directive';

declare var $: any;

function dumpVersions() {
    console.log(`FLO is using [Angular: ${VERSION.full}, jQuery: ${$.fn.jquery}]`);
}

dumpVersions(); // TODO: remove on release branch

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    NestedComponent,
    CurrencyInputDirective,
    CurrencyInput2Directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CurrencyMaskModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

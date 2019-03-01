import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { CompTwoComponent } from './comp-two/comp-two.component';


@NgModule({
    declarations: [
        AppComponent,
        CompOneComponent,
        StockListComponent,
        CompTwoComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [
        CompOneComponent,
        CompTwoComponent
    ]
})
export class AppModule { }

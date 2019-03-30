import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UnlessDirective } from './unless.directive';
import { TestComponent } from './test/test.component';
import { DynCompComponent } from './dyn-comp/dyn-comp.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    UnlessDirective,
    TestComponent,
    DynCompComponent,
    TabPanelComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DynCompComponent]
})
export class AppModule { }

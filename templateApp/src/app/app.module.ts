import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { ColorizerDirective } from './colorizer.directive';
import { BComponent } from './b/b.component';
import { CardOrListViewComponent } from './card-or-list-view/card-or-list-view.component';
import { CardItemDirective } from './card-item.directive';
import { ListItemDirective } from './list-item.directive';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    ColorizerDirective,
    BComponent,
    CardOrListViewComponent,
    CardItemDirective,
    ListItemDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

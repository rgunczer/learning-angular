import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { ColorizerDirective } from './colorizer.directive';
import { BComponent } from './b/b.component';
import { CardOrListViewComponent } from './card-or-list-view/card-or-list-view.component';
import { CardItemDirective } from './card-or-list-view/card-item.directive';
import { ListItemDirective } from './card-or-list-view/list-item.directive';
import { CarouselTestComponent } from './carousel-test/carousel-test.component';
import { CarouselDirective } from './carousel-test/carousel.directive';
import { StructuralDirTestAltComponent } from './structural-dir-test-alt/structural-dir-test-alt.component';
import { JustDirective } from './structural-dir-test-alt/just.directive';
import { ViewContainerTestComponent } from './view-container-test/view-container-test.component';
import { TestCompComponent } from './view-container-test/test-comp/test-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    ColorizerDirective,
    BComponent,
    CardOrListViewComponent,
    CardItemDirective,
    ListItemDirective,
    CarouselTestComponent,
    CarouselDirective,
    StructuralDirTestAltComponent,
    JustDirective,
    ViewContainerTestComponent,
    TestCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

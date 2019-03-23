import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { SomeRouteComponent } from './some-route/some-route.component';
import { OtherRouteComponent } from './other-route/other-route.component';
import { LeftNavDirective } from './left-nav.directive';
import { ThirdRouteComponent } from './third-route/third-route.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavComponent,
    SomeRouteComponent,
    OtherRouteComponent,
    LeftNavDirective,
    ThirdRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

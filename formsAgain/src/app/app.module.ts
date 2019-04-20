import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule, MatButtonModule, MatMenuModule, MatIconModule, MatFormFieldModule, MatInputModule, MatRadioModule } from '@angular/material';
import { MouseTrackAnimComponent } from './mouse-track-anim/mouse-track-anim.component';

@NgModule({
   declarations: [
      AppComponent,
      ReactiveComponent,
      MouseTrackAnimComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      MatCardModule,
      MatButtonModule,
      MatMenuModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      MatRadioModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

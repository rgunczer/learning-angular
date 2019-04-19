import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { TemplateFormComponent, PasswordMatcher } from './template-form/template-form.component';
import { MyToggleComponent } from './my-toggle/my-toggle.component';

@NgModule({
   declarations: [
      AppComponent,
      ReactiveFormComponent,
      TemplateFormComponent,
      PasswordMatcher,
      MyToggleComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatCardModule,
      ReactiveFormsModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
  {
    path: 'reactive',
    component: ReactiveFormComponent
  },
  {
    path: 'template',
    component: TemplateFormComponent
  },
  {
    path: '',
    redirectTo: '/template',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveComponent } from './reactive/reactive.component';

const routes: Routes = [
  {
    path: 'reactive',
    component: ReactiveComponent
  },
  {
    path: '',
    redirectTo: '/reactive',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

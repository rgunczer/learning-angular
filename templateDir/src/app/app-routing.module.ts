import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SomeRouteComponent } from './some-route/some-route.component';
import { OtherRouteComponent } from './other-route/other-route.component';

const routes: Routes = [
  {
    path: 'some',
    component: SomeRouteComponent
  },
  {
    path: 'other',
    component: OtherRouteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

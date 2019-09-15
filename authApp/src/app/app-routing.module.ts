import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedinComponent } from './loggedin/loggedin.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: 'loggedin',
    component: LoggedinComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

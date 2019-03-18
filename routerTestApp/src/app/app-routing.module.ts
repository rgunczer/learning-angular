import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { environment } from 'src/environments/environment';

const dat = {};
dat[environment.router.data.resourceName] = 'ORGANISATION';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: dat
    // data: {
    //   [environment.router.data.resourceName]: 'ORGANISATION' // <- error
    // }
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'about/:id',
    component: AboutComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

console.log(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

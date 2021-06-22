import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';
import { PreviewComponent } from './preview/preview.component';

const routes: Routes = [
  {
    path: 'preview',
    component: PreviewComponent
  },
  {
    path: 'dummy',
    component: DummyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadComponent } from './global/components/bad/bad.component';

const routes: Routes = [
  {
    path: '404',
    component: BadComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DealsMainComponent } from './deals-main.component';

const routes: Routes = [
  {
    path: '',
    component: DealsMainComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealsRoutingModule { }

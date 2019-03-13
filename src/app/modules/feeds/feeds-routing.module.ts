import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedsMainComponent } from '@app/modules/feeds/feeds-main.component';

const routes: Routes = [
  {
    path: '',
    component: FeedsMainComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedsRoutingModule {}

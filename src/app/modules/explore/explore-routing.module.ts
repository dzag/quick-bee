import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExploreMainComponent } from '@app/modules/explore/explore-main.component';

const routes: Routes = [
  {
    path: '',
    component: ExploreMainComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule {}

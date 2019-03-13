import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExploreMainComponent } from './explore-main.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

const routes: Routes = [
  {
    path: '',
    component: ExploreMainComponent,
  },
  {
    path: ':categoryId',
    children: [
      {
        path: ':id',
        component: ItemDetailsComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule {}

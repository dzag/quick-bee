import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExploreMainComponent } from './explore-main.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { CategoryListingComponent } from './category-listing/category-listing.component';

const routes: Routes = [
  {
    path: '',
    component: ExploreMainComponent,
  },
  {
    path: 'meta',
    component: CategoryListingComponent,
  },
  {
    path: ':categoryId',
    children: [
      {
        path: '',
        component: CategoryListingComponent,
      },
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

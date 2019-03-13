import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { SharedModule } from '@app/shared/shared.module';

import { ExploreMainComponent } from './explore-main.component';
import { ExploreListComponent } from './explore-list/explore-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { CategoryListingComponent } from './category-listing/category-listing.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ExploreRoutingModule
  ],
  declarations: [
    ExploreMainComponent,
    ExploreListComponent,
    ItemDetailsComponent,
    CategoryListingComponent,
  ],
})
export class ExploreModule {}

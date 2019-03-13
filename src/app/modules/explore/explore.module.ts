import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreMainComponent } from '@app/modules/explore/explore-main.component';

@NgModule({
  imports: [
    CommonModule,
    ExploreRoutingModule
  ],
  declarations: [
    ExploreMainComponent,
  ],
})
export class ExploreModule {}

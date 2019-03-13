import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedsRoutingModule } from './feeds-routing.module';
import { FeedsMainComponent } from '@app/modules/feeds/feeds-main.component';

@NgModule({
  imports: [
    CommonModule,
    FeedsRoutingModule
  ],
  declarations: [
    FeedsMainComponent
  ],
})
export class FeedsModule {}

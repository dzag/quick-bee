import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealsRoutingModule } from './deals-routing.module';
import { DealsMainComponent } from './deals-main.component';

@NgModule({
  imports: [
    CommonModule,
    DealsRoutingModule
  ],
  declarations: [
    DealsMainComponent,
  ]
})
export class DealsModule { }

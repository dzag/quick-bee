import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingMainComponent } from './setting-main.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SettingRoutingModule
  ],
  declarations: [
    SettingMainComponent,
  ]
})
export class SettingModule { }

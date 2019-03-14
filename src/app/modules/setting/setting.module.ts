import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingMainComponent } from './setting-main.component';

@NgModule({
  imports: [
    CommonModule,
    SettingRoutingModule
  ],
  declarations: [
    SettingMainComponent,
  ]
})
export class SettingModule { }

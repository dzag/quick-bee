import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingMainComponent } from './setting-main.component';

const routes: Routes = [
  {
    path: '',
    component: SettingMainComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }

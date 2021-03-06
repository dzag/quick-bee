import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '@core/components/main-layout/main-layout.component';
import { AuthenticatedGuard } from '@core/authentication/authenticated.guard';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: './authentication/authentication.module#AuthenticationModule',
  },
  {
    path: 'app',
    canActivate: [AuthenticatedGuard],
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'explore', pathMatch: 'full' },
      { path: 'explore', loadChildren: '@app/modules/explore/explore.module#ExploreModule' },
      { path: 'feeds', loadChildren: '@app/modules/feeds/feeds.module#FeedsModule' },
      { path: 'deals', loadChildren: '@app/modules/deals/deals.module#DealsModule' },
      { path: 'messages', loadChildren: '@app/modules/message/message.module#MessageModule' },
      { path: 'settings', loadChildren: '@app/modules/setting/setting.module#SettingModule' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

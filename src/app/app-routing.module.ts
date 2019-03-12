import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '@core/components/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: './authentication/authentication.module#AuthenticationModule',
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/auth', pathMatch: 'full' },
      { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

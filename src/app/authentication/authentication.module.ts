import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthHomeComponent } from './auth-home/auth-home.component';
import { SharedModule } from '@app/shared/shared.module';
import { LoginComponent } from '@app/authentication/login/login.component';
import { AuthBaseComponent } from '@app/authentication/auth-base.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    AuthenticationRoutingModule,
  ],
  declarations: [
    AuthBaseComponent,
    AuthHomeComponent,
    LoginComponent,
  ]
})
export class AuthenticationModule { }

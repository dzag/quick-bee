import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageRoutingModule } from './message-routing.module';
import { MessageMainComponent } from './message-main.component';

@NgModule({
  imports: [
    CommonModule,
    MessageRoutingModule
  ],
  declarations: [
    MessageMainComponent,
  ]
})
export class MessageModule { }

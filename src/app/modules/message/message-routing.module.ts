import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageMainComponent } from './message-main.component';

const routes: Routes = [
  {
    path: '',
    component: MessageMainComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageRoutingModule { }

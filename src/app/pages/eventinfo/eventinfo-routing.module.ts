import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventinfoPage } from './eventinfo.page';

const routes: Routes = [
  {
    path: '',
    component: EventinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventinfoPageRoutingModule {}

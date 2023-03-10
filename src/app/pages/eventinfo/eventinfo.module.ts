import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventinfoPageRoutingModule } from './eventinfo-routing.module';

import { EventinfoPage } from './eventinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventinfoPageRoutingModule
  ],
  declarations: [EventinfoPage]
})
export class EventinfoPageModule {}

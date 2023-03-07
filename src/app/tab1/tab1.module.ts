import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';


import { Tab1PageRoutingModule } from './tab1-routing.module';
import { CardEventComponent } from '../components/card-event/card-event.component';
import { CardBigComponent } from '../components/card-big/card-big.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [
    Tab1Page,
    CardEventComponent,CardBigComponent
  ]
})
export class Tab1PageModule {}

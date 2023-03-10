import { Component,Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ShowEvent } from 'src/app/interfaces';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-card-big',
  templateUrl: './card-big.component.html',
  styleUrls: ['./card-big.component.scss'],
})
export class CardBigComponent  implements OnInit {

  @Input() nameEvent:String;
  @Input() dateEvent:String;
  @Input() descriptionEvent:String;
  @Input() photoEvent:String;
  @Input() theEvent:String;
  

  constructor(public navCtrl: NavController) {
    this.nameEvent="";
    this.dateEvent="";
    this.descriptionEvent="";
    this.photoEvent="";
    this.theEvent='';
   }

  ngOnInit(){
   
  }
  openEventInfo() {
    // Navigate to the event info page and pass data
    
    this.navCtrl.navigateForward('/eventinfo', {
      queryParams: {
        theEvent:this.theEvent
      }
    });
    
  }

}

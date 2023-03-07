import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrls: ['./card-event.component.scss'],
})
export class CardEventComponent  implements OnInit {
  @Input() nameEvent:String;
  @Input() dateEvent:String;
  @Input() descriptionEvent:String;
  @Input() photoEvent:String;


  constructor() {
    this.nameEvent="";
    this.dateEvent="";
    this.descriptionEvent="";
    this.photoEvent="";
   }

  ngOnInit() {}

}

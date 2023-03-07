import { Component,Input, OnInit } from '@angular/core';

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


  constructor() {
    this.nameEvent="";
    this.dateEvent="";
    this.descriptionEvent="";
    this.photoEvent="";
   }

  ngOnInit() {}

}

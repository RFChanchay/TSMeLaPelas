import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-eventinfo',
  templateUrl: './eventinfo.page.html',
  styleUrls: ['./eventinfo.page.scss'],
})
export class EventinfoPage implements OnInit {
  
 
  @Input() name: string;
  @Input() date: Date;
  @Input() description: string;
  @Input() place: string;
  @Input() price: number;
  @Input() time: string;
  @Input() artist: string;
  @Input() photoEvent:string;

  constructor() { 
    this.name="",
    this.date= new Date(1478708162000),
    this.description="",
    this.place="",
    this.price=0,
    this.time="",
    this.artist="",
    this.photoEvent="";
    this.photoEvent="";
  }
  

  ngOnInit() {
  }

}

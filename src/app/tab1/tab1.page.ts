import { Component, OnInit } from '@angular/core';
import { ShowEvent } from '../interfaces';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public events:ShowEvent []=[];
  public event:ShowEvent | undefined;
  
  
    
  ngOnInit(){
    this.eventServices.getEvents().subscribe(events=>{
      this.events=events; 
    })
  }

  constructor(private eventServices: EventService) {}

}

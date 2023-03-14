import { Component, OnInit } from '@angular/core';
import { BougthEvent } from '../interfaces';
import { AuthService } from '../services/auth.service';
import { EventService } from '../services/event.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  bougthEvents:BougthEvent[]=[];
  isModalOpen = false;
  constructor(
    private eventServices: EventService,
    private authService:AuthService
  ) {
    
  }
  ngOnInit() {
    this.eventServices.getComprasByMail(this.authService.getCurrentUserEmail()).subscribe(bougthEvents=>{
      this.bougthEvents=bougthEvents;
    })
  }
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  
}

import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BougthEvent, ShowEvent } from 'src/app/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import {EventService} from '../../services/event.service';
import {FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-eventinfo',
  templateUrl: './eventinfo.page.html',
  styleUrls: ['./eventinfo.page.scss'],
})
export class EventinfoPage implements OnInit {
  
 
  @Input() name?: string;
  @Input() date?: string;
  @Input() description?: string;
  @Input() place?: string;
  @Input() price?: number;
  @Input() time?: string;
  @Input() artist?: string;
  @Input() photoEvent?:string;
  public event: ShowEvent | undefined;
  public events:ShowEvent []=[];
  public theConcert:any;
  bougthEvent:BougthEvent;
  botonHabilitado = true;
  bougthEvents:BougthEvent[]=[];

  constructor(
    private authService: AuthService,
		private router: Router,
    private activatedRoute: ActivatedRoute,
    private eventServices: EventService
  ) { 
    this.name="",
    this.date= "",
    this.description="",
    this.place="",
    this.price=0,
    this.time="",
    this.artist="",
    this.photoEvent="";
    //this.photoEvent="";
    this.bougthEvent = {
      id: '',
      name: '',
      date: '',
      mailUser: ''
    };
  }
  
  async logout() {
		await this.authService.logout();
		this.router.navigateByUrl('/', { replaceUrl: true });
	}
  async comprar(){
    console.log(this.bougthEvent);
    const response=await this.eventServices.addBuy(this.bougthEvent);
    console.log(response);
  }
  ngOnInit() {
    this.theConcert=this.activatedRoute.snapshot.queryParamMap.get('theEvent');
    console.log(this.theConcert);
    this.eventServices.getEvents().subscribe(events=>{
      this.events=events;
      console.log(this.events);
      this.event = this.events.find((ev) => ev.id === this.theConcert);
      if (this.event) {
        console.log(this.event);
        this.name=this.event.name;
        this.date=this.event.date;
        this.description=this.event.description;
        this.place=this.event.place;
        this.price=this.event.price;
        this.time=this.event.time;
        this.artist=this.event.artist;
        this.photoEvent=this.event.image;
        this.bougthEvent.id=this.theConcert;
        this.bougthEvent.name=this.name;
        this.bougthEvent.date=this.date;
        this.eventServices.getComprasByNameAndMail(this.name,this.authService.getCurrentUserEmail()).subscribe(bougthEvents=>{
          this.bougthEvents=bougthEvents;
          console.log(this.bougthEvents);
          if(this.bougthEvents.length>0){
            this.botonHabilitado=false;
          }
        })
        
        } else {
        console.log('Evento no encontrado');
      }
    })


    this.bougthEvent.mailUser=this.authService.getCurrentUserEmail();
    
    
  }

}

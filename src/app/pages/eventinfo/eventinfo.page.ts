import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowEvent } from 'src/app/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import {EventService} from '../../services/event.service'
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
  }
  
  async logout() {
		await this.authService.logout();
		this.router.navigateByUrl('/', { replaceUrl: true });
	}
  ngOnInit() {
    this.theConcert=this.activatedRoute.snapshot.queryParamMap.get('theEvent');
    
    //this.event = this.activatedRoute.snapshot.data['theEvent'];
    //const jsonObject = JSON.parse(this.event);
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
        // Aquí puedes hacer lo que necesites con el evento encontrado
      } else {
        console.log('Evento no encontrado');
      }
    })
    
  }

}

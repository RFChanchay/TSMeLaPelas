import { Component, OnInit } from '@angular/core';
import { ShowEvent } from '../interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public events:ShowEvent []=[];
  
  cargaDATOS(){
    this.events.push({
      id: 1,
      name: 'Bad Bunny',
      date: new Date(Date.parse('2022-11-16T13:51:50.417-07:00')),
      description: 'El Concierto del Año',
      place: 'Quito, Ecuador',
      price: 85,
      time: '2 Hrs',
      artist: 'Bad Bunny',
      image: 'benito.jpg'
    });
    
    this.events.push({
      id: 2,
      name: 'Romeo Santos',
      date: new Date(Date.parse('2023-02-25T13:51:50.417-07:00')),
      description: 'Buen Show',
      place: 'Quito, Ecuador',
      price: 35,
      time: '2 Hrs',
      artist: 'Romeo Santos',
      image: 'romeo.jpg'
    });
    
    this.events.push({
      id: 3,
      name: 'Duki',
      date: new Date(Date.parse('2022-09-18T13:51:50.417-07:00')),
      description: 'Conoce la perla del Pacífico',
      place: 'Guayaquil, Ecuador',
      price: 55,
      time: '2 Hrs',
      artist: 'Duki',
      image: 'duki.jpg'
    });
    
  }
  ngOnInit(){
    this.cargaDATOS();
    console.log(this.events.length);
    console.log(this.events);
  }

  constructor() {}

}

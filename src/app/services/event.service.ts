import { Injectable } from '@angular/core';
import { collectionData, docData, Firestore,addDoc } from '@angular/fire/firestore';
import { collection,doc,query,where } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { BougthEvent, ShowEvent } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private firesotre:Firestore,//private db:AngularFireDatabase
  ) { 
  }
  addBuy(buy:BougthEvent){
    const bougthReference = collection(this.firesotre,'compras');
    return addDoc(bougthReference,buy);
  }
  getEvents():Observable<ShowEvent[]>{
    const eventRef = collection(this.firesotre,'eventos');
    return collectionData(eventRef,{idField:'id'}) as Observable<ShowEvent[]>;
  }
  getEventById(id: string):Observable<ShowEvent>{
    const eventRef=doc(this.firesotre,'eventos',id);
    return docData(eventRef) as Observable<ShowEvent>;
  }
  getConsumidoresByArtist(artist: string): Observable<ShowEvent[]> {
    const consumidoresRef = collection(this.firesotre, 'eventos');
    const queryxd = query(consumidoresRef, where('artist', '==', artist));
    return collectionData(queryxd, { idField: 'id' }) as Observable<ShowEvent[]>;
  }
  getComprasByMail(mail: string|null): Observable<BougthEvent[]>{
    const consumidoresRef = collection(this.firesotre, 'compras');
    const queryxd = query(consumidoresRef, where('mailUser', '==', mail));
    return collectionData(queryxd, { idField: 'id' }) as Observable<BougthEvent[]>;
  }
  getComprasByNameAndMail(artist: string|undefined, date: string|null): Observable<BougthEvent[]> {
    const consumidoresRef = collection(this.firesotre, 'compras');
    const queryxd = query(consumidoresRef, where('name', '==', artist), where('mailUser', '==', date));
    return collectionData(queryxd, { idField: 'id' }) as Observable<BougthEvent[]>;
  }
  
  
}

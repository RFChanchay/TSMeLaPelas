import { Injectable } from '@angular/core';
import { collectionData, docData, documentId, Firestore,addDoc } from '@angular/fire/firestore';
import { collection,doc,getDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { BougthEvent, ShowEvent } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private firesotre:Firestore) { }
  addBuy(buy:BougthEvent){
    const bougthReference = collection(this.firesotre,'compras');
    return addDoc(bougthReference,buy);
  }
  getEvents():Observable<ShowEvent[]>{
    const eventRef = collection(this.firesotre,'eventos');
    return collectionData(eventRef,{idField:'id'}) as Observable<ShowEvent[]>;
  }

  /*getByUID(uid: string): Observable<any>{
    return this.firesotre.
  }*/
  
}

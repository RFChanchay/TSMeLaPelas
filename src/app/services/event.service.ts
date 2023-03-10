import { Injectable } from '@angular/core';
import { collectionData, docData, documentId, Firestore } from '@angular/fire/firestore';
import { getValueChanges } from '@angular/fire/remote-config';
import { collection,doc,getDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { ShowEvent } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private firesotre:Firestore) { }
  getEvents():Observable<ShowEvent[]>{
    const eventRef = collection(this.firesotre,'eventos');
    return collectionData(eventRef,{idField:'id'}) as Observable<ShowEvent[]>;
  }
  
}

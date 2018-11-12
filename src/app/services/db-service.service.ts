import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {
	exchanges: Observable<any[]>;
	constructor(db: AngularFirestore) {
		this.exchanges = db.collection('exchanges').valueChanges();
  	}
}

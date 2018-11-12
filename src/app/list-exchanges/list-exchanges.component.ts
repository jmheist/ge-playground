import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-exchanges',
  templateUrl: './list-exchanges.component.html',
  styleUrls: ['./list-exchanges.component.scss']
})
export class ListExchangesComponent implements OnInit {

 	exchanges: Observable<any[]>;
  	constructor(db: AngularFirestore) {
    	this.exchanges = db.collection('exchanges').valueChanges();
  	}

	  ngOnInit() {
	  }

}

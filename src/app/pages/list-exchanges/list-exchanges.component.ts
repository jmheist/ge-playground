import { Component, OnInit } from '@angular/core';
import { DbServiceService } from '../../services/db-service.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { User } from 'src/app/models/user.model';

@Component({
	selector: 'app-list-exchanges',
	templateUrl: './list-exchanges.component.html',
	styleUrls: ['./list-exchanges.component.scss']
})
export class ListExchangesComponent implements OnInit {

	public exchanges = {};
	public users = {};
	public userDoc;
	public user: User;

 	constructor(
		private _dbservice: DbServiceService,
		private fs: FirestoreService) {
  	}

	ngOnInit() {
		this.exchanges = this._dbservice.getExchanges();
		this.users = this._dbservice.users;
	}

	getUser(id) {
		this._dbservice.getUser(id).subscribe(user =>{
			this.user = user as User;
			console.log(this.user.uid);
		});
	}
}

import { Component, OnInit } from '@angular/core';
import { DbServiceService } from '../services/db-service.service';

@Component({
	selector: 'app-list-exchanges',
	templateUrl: './list-exchanges.component.html',
	styleUrls: ['./list-exchanges.component.scss']
})
export class ListExchangesComponent implements OnInit {

	public exchanges = {};
	public users = {};

 	constructor(private _dbservice: DbServiceService) {
  	}

	ngOnInit() {
		this.exchanges = this._dbservice.exchanges;
		this.users = this._dbservice.users;
	}

}

import { Component, OnInit } from '@angular/core';
import { DbServiceService } from '../services/db-service.service';

@Component({
	selector: 'app-list-exchanges',
	templateUrl: './list-exchanges.component.html',
	styleUrls: ['./list-exchanges.component.scss']
})
export class ListExchangesComponent implements OnInit {

	public exchanges = {};

 	constructor(private _dbservice: DbServiceService) {
  	}

	ngOnInit() {
		this.exchanges = this._dbservice.exchanges;
	}

}

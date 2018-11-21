import { Injectable } from '@angular/core';
import { DbServiceService } from '../services/db-service.service';

@Injectable({
  	providedIn: 'root'
})
export class SetupService {
	
	private setupData;
	
	constructor(
		private db: DbServiceService,
	) {
		this.setupData = { "name": "New Gift Exchange 1", "date": { "year": 2018, "month": 11, "day": 15 }, "budget": "50", "nameCount": "1", "includeAdmin": true, "adminName": "Jacob Heisterkamp", "adminEmail": "jmheist@gmail.com", "exchangees": [ { "name": "Name 1", "email": "jmheist@gmail.com" }, { "name": "Name 2", "email": "jmheist@gmail.com" }, { "name": "Name 3", "email": "jmheist@gmail.com", "excluded": "Name 2" }, { "name": "Name 4", "email": "jmheist@gmail.com", "excluded": "Name 1" }, { "name": "Name 5", "email": "jmheist@gmail.com" }, { "name": "Name 6", "email": "jmheist@gmail.com", "excluded": "Name 5" } ], "welcomeMessage": "This is my great message!" };
		// this.setupData = {};
	}

	addData(data) {
		console.log(data);
		if (data) {
			for (let key in data) {  
				this.setupData[key] = data[key];
			}
		}
		this.printData()
	}

	async sendSetupToFirestore() {
		await this.handleUsers();
		console.log('users added to db!');
		await this.handleExchange();
		console.log('exhange added to db!');
	}

	async handleExchange() {

		var exchange = this.setupData;

		// DO THE MAGIC, draw names TODO: Make this actually random and exclude names.... :D
		var counter = 1;
		const len = this.setupData.exchangees.length;
		for (let i = 0; i < this.setupData.exchangees.length; i++) {
			if (counter > len-1) {
				counter = 0;
			}
			const ex = this.setupData.exchangees[i];
			ex['drawnName'] = this.setupData.exchangees[counter].name;
			ex['drawnNameEmail'] = this.setupData.exchangees[counter].email;
			counter++;
		}

		await this.db.addExchange(exchange);
		return;
	}

	async handleUsers() {
		var userArray = [];
		for (let i = 0; i < this.setupData.exchangees.length; i++) {
			const user = this.setupData.exchangees[i];
			await this.db.addUser(user);
		}
		return;
	}

	getData() {
		return this.setupData;
	}

	printData() {
		console.log(this.setupData ? this.setupData : 'no data in this.setupData');
	}
	
}
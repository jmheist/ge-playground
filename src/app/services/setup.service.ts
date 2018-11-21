import { Injectable } from '@angular/core';
import { Setup } from '../setup';

@Injectable({
  	providedIn: 'root'
})
export class SetupService {
	private setupData;
	
	constructor() {
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

	sendSetupToFirestore() {
		
	}

	getData() {
		return this.setupData;
	}

	printData() {
		console.log(this.setupData ? this.setupData : 'no data in this.setupData');
	}
	
}
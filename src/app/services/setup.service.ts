import { Injectable } from '@angular/core';
import { Setup } from '../setup';

@Injectable({
  	providedIn: 'root'
})
export class SetupService {
	private setupData;
	
	constructor() {
		this.setupData = new Setup('Exhange Name 2', { "year": 2018, "month": 11, "day": 15 }, 100, '1', true, false, 'jacob', 'jmheist@');
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

	getData() {
		return this.setupData;
	}

	printData() {
		console.log(this.setupData ? this.setupData : 'no data in this.setupData');
	}
	
}
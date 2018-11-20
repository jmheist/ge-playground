import { Injectable } from '@angular/core';
import { Setup } from '../setup';

@Injectable({
  	providedIn: 'root'
})
export class SetupService {
	private setupData;
	
	constructor() {
		this.setupData = {};
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
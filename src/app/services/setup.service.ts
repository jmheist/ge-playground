import { Injectable } from '@angular/core';
import { DbServiceService } from '../services/db-service.service';
import { User } from '../models/user.model';
import { database } from 'firebase';
import { promise } from 'protractor';

@Injectable({
	providedIn: 'root'
})
export class SetupService {

	private setupData;

	constructor(
		private db: DbServiceService,
	) {
		this.setupData = {
			"adminName": "Jacob Heisterkamp",
			"adminEmail": "jmheist@gmail.com",
			"exchangees": [
				{ "name": "stacey", "email": "stacey@email.com", "excluded": "Jacob Heisterkamp" },
				{ "name": "dave", "email": "dave@email.com", "excluded": "deb" },
				{ "name": "deb", "email": "deb@email.com", "excluded": "dave" },
				{ "name": "grant", "email": "grant@email.com", "excluded": "kristin" },
				{ "name": "kristin", "email": "kristin@email.com", "excluded": "grant" },
				{ "name": "Jacob Heisterkamp", "email": "jmheist@gmail.com", "excluded": "stacey", 'isAdmin': 'true' }
			],
			"name": "Best Heisterkamp Family Exchange",
			"date": { "year": 2018, "month": 11, "day": 15 },
			"budget": "20",
			"nameCount": "1",
			"includeAdmin": true,
			"adminAdded": true,
			"welcomeMessage":
				"Hello Everyone!"
		};
		// this.setupData = {};
	}

	addData(data) {
		if (data) {
			for (let key in data) {
				this.setupData[key] = data[key];
			}
		}
		this.printData();
	}

	async sendSetupToFirestore() {
		await this.addAdmin();
		await this.drawNames();
		await this.handleUsers();
		await this.handleExchange();
		this.finish();
	}

	finish() {
		console.log('im done');
	}

	async addAdmin() {
		console.log('adding addmin')
		var user: User = {
			name: this.setupData.adminName,
			email: this.setupData.adminEmail,
		}
		await this.db.addUser(user);
		const userData: User = await this.db.getUserOnce(user.email);
		this.setupData.adminUid = userData.uid;
		console.log('adding adminuid', userData.uid);
		
		// this.db.getUser(user.email).subscribe(async userData => {
		// 	this.setupData['adminUid'] = await userData.uid;
		// 	console.log('adding adminuid', userData.uid);
		// 	this.handleUsers();
		// });
	}

	async handleExchange() {
		console.log('handleExchange(): Starting');
		console.log(this.setupData);
		const exId = await this.db.addExchange(this.setupData);
		console.log('handleExchange(): Created in DB');
		const properties = Object.keys(this.setupData.exchangees);
		for (const prop of properties) {
			await this.db.addExchangeesToExchange(exId, this.setupData.exchangees[prop]);
		}
		console.log('handleExchange(): Completed processing');
	}

	async handleUsers() {
		console.log('handleUsers(): Started');
		var newExs = {};
		const properties = Object.keys(this.setupData.exchangees);
		for (const prop of properties) {
			let user = this.setupData.exchangees[prop];
			await this.db.addUser(user);
			const userData: User = await this.db.getUserOnce(user.email);
			user.uid = userData.uid;
			newExs[userData.uid] = user;
		}
		this.setupData.exchangees = newExs;
		console.log('handleUsers(): Completed');
	}

	getData() {
		return this.setupData;
	}

	printData() {
		console.log(this.setupData ? this.setupData : 'no data in this.setupData');
	}

	async drawNames(prod = true) {
		let errors = false;
		let people = [];
		if (prod) {
			people = this.setupData.exchangees;
		} else {
			people = Object.assign([], this.setupData.exchangees);
		}
		const verifyGiftPartners = (people) => people.every((person) => person.nameDrawn);
		const setNameDrawnToBlank = (people) => people.forEach((person) => person.nameDrawn = '');

		//Knuth shuffle
		const shuffleArray = (array) => {
			for (var i = array.length - 1; i > 0; i--) {
				var j = Math.floor(Math.random() * (i + 1));
				[array[i], array[j]] = [array[j], array[i]];
			}
		};

		const assignGiftPartners = function (people) {
			var peopleLeftToAssign = people.map(person => person.name);

			people.forEach(function (person) {
				var choices = peopleLeftToAssign.filter(function (personToAssign) {
					return (
						personToAssign != person.name &&
						personToAssign != person.excluded
						// person.past.indexOf(personToAssign) === -1
					);
				});
				if (choices.length > 1) {
					shuffleArray(choices);
				}
				if (choices.length === 0) {

				} else {
					person.nameDrawn = choices[0];
					var index = peopleLeftToAssign.indexOf(choices[0]);
					peopleLeftToAssign.splice(index, 1);
				}
			});
		};

		let allAssigned = false;
		let loopCount = 0;
		while (!allAssigned) {
			loopCount++;
			assignGiftPartners(people);
			allAssigned = verifyGiftPartners(people);
			//exit loop if going too long
			if (loopCount > 50) {
				console.log('Something went wrong with the assignment');
				errors = true;
				break;
			}
			if (!allAssigned) {
				setNameDrawnToBlank(people);
			}
		}

		//save choices into database
		if (errors) {
			console.log('there were errors while drawing names');
		} else {
			console.log(people);
		}
		console.log('names drawn');
	}
}
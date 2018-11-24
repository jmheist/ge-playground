import { Injectable } from '@angular/core';
import { DbServiceService } from '../services/db-service.service';
import { ParseSourceSpan } from '@angular/compiler';

@Injectable({
	providedIn: 'root'
})
export class SetupService {

	private setupData;

	constructor(
		private db: DbServiceService,
	) {
		this.setupData = {
			// "name": "New Gift Exchange 1",
			// "date": { "year": 2018, "month": 11, "day": 15 },
			// "budget": "50",
			// "nameCount": "1",
			// "includeAdmin": true,
			// "adminName": "Jacob Heisterkamp",
			// "adminEmail": "jmheist@gmail.com",
			// "exchangees": [
			// 	{ "name": "", "email": "jmheis1t@gmail.com" },
			// 	{ "name": "Jacob 2 Heisterkamp", "email": "jmheist2@gmail.com" },
			// 	{ "name": "Jacob 3 Heisterkamp", "email": "jmheist3@gmail.com" },
			// 	{ "name": "Jacob 4 Heisterkamp", "email": "jmheist4@gmail.com" },
			// 	{ "name": "Jacob 5 Heisterkamp", "email": "jmheist5@gmail.com" },
			// 	{ "name": "Jacob 6 Heisterkamp", "email": "jmheist6@gmail.com" }
			// ],
			// "welcomeMessage": "This is my great message!"
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
		this.drawNames(true);
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
			if (counter > len - 1) {
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

	drawNames(prod = false) {
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

		if(!prod) { return !errors } // so I can test the excludes and return true if excludes are fine.

	}
}
import { Injectable } from '@angular/core';
import { DbServiceService } from '../services/db-service.service';
import { User } from '../models/user.model';

@Injectable({
	providedIn: 'root'
})
export class SetupService {

	private setupData;

	constructor(
		private db: DbServiceService,
	) {
		this.setupData = {
			"adminName": "Jacob Heisterkamp", "adminEmail": "jmheist@gmail.com", "exchangees": [{ "name": "stacey", "email": "stacey@email.com", "excluded": "Jacob Heisterkamp" }, { "name": "dave", "email": "dave@email.com", "excluded": "deb" }, { "name": "deb", "email": "deb@email.com", "excluded": "dave" }, { "name": "grant", "email": "grant@email.com", "excluded": "kristin" }, { "name": "kristin", "email": "kristin@email.com", "excluded": "grant" }, { "name": "Jacob Heisterkamp", "email": "jmheist@gmail.com", "excluded": "stacey" }], "name": "Best Heisterkamp Family Exchange", "date": { "year": 2018, "month": 11, "day": 15 }, "budget": "20", "nameCount": "1", "includeAdmin": true, "adminAdded": true, "welcomeMessage": "Hello Everyone!"
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
		const exId = await this.db.addExchange(this.setupData);
		console.log(`exchange created ${exId}`);
		console.log(this.setupData);
		const properties = Object.keys(this.setupData.exchangees);
		properties.forEach(async prop => {
			console.log(`loop ${prop}`)
			await this.db.addExchangeesToExchange(exId, this.setupData.exchangees[prop]);
		});
	}

	async handleUsers() {
		var newExs = {};
		for (let i = 0; i < this.setupData.exchangees.length; i++) {
			let user = this.setupData.exchangees[i];
			await this.db.addUser(user);

			await this.db.getUser(user.email).subscribe(userData => {
				user.uid = userData.uid;
				newExs[userData.uid] = user;
				return;
			});
		}
		this.setupData.exchangees = newExs;
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

		if (!prod) { return !errors } // so I can test the excludes and return true if excludes are fine.

	}
}
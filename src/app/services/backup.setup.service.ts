import { Injectable } from "@angular/core";
import { DbServiceService } from "./db-service.service";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root"
})
export class SetupService {
  private setupData;

  constructor(private db: DbServiceService) {
    this.setupData = {
      name: "asdasdda",
      date: { year: 2018, month: 11, day: 14 },
      budget: "20",
      includeAdmin: true,
      adminName: "Jacob Heisterkamp",
      adminEmail: "jmheist@gmail.com",
      // "adminName": "Jacob Heisterkamp",
      // "adminEmail": "jmheist@gmail.com",
      // "exchangees": [
      // 	{ "name": "stacey", "email": "stacey@email.com" },
      // 	{ "name": "dave", "email": "dave@email.com", "excluded": "deb" },
      // 	{ "name": "deb", "email": "deb@email.com", "excluded": "dave" },
      // 	{ "name": "grant", "email": "grant@email.com", "excluded": "kristin" },
      // 	{ "name": "kristin", "email": "kristin@email.com", "excluded": "grant" },
      // ],
      // "name": "Best Heisterkamp Family Exchange",
      // "date": { "year": 2018, "month": 11, "day": 15 },
      // "budget": "20",
      // "nameCount": "1",
      // "includeAdmin": false,
      // "adminAdded": false,
      // "welcomeMessage": "Hello Everyone!",
    };
  }

  addData(data) {
    if (data) {
      for (let key in data) {
        this.setupData[key] = data[key];
      }
    }
  }

  async sendSetupToFirestore() {
    await this.addAdmin();
    await this.drawNames();
    await this.handleUsers();
    await this.handleExchange();
    await this.updateUsersWithExchangeId();
    this.finish();
  }

  finish() {
    // console.log('im done');
  }

  async updateUsersWithExchangeId() {
    console.log("updateUsersWithExchangeId(): Starting");
    let emails = [];
    if (!this.setupData.includeAdmin) {
      emails.push(this.setupData.adminEmail);
    }
    for (const ex in this.setupData.exchangees) {
      emails.push(this.setupData.exchangees[ex].email);
    }
    for (const email of emails) {
      console.log(email, this.setupData.uid);
      await this.db.addExchangeIdToUser(email, this.setupData.uid);
    }
    console.log("updateUsersWithExchangeId(): Finished");
  }

  async addAdmin() {
    console.log("addAdmin(): adding addmin");
    var user: User = {
      name: this.setupData.adminName,
      email: this.setupData.adminEmail
    };
    await this.db.addUser(user);
    const userData: User = await this.db.getUserOnce(user.email);
    this.setupData.adminUid = userData.uid;
    console.log("addAdmin(): completed adding addmin");
  }

  async handleExchange() {
    console.log("handleExchange(): Starting");
    this.setupData.uid = await this.db.addExchange(this.setupData);
    const properties = Object.keys(this.setupData.exchangees);
    for (const prop of properties) {
      await this.db.addExchangeesToExchange(
        this.setupData.uid,
        this.setupData.exchangees[prop]
      );
    }
    console.log("handleExchange(): Completed processing");
  }

  async handleUsers() {
    console.log("handleUsers(): Started");
    var newExs = {},
      nameArray = {};
    const properties = Object.keys(this.setupData.exchangees);
    for (const prop of properties) {
      let user = this.setupData.exchangees[prop];
      user.tempId = "" + Math.floor(Math.random() * 100000000 + 1);
      await this.db.addUser(user);
      const userData: User = await this.db.getUserOnce(user.email);
      user.uid = userData.uid;
      newExs[userData.uid] = user;
      nameArray[newExs[userData.uid].tempId] = newExs[userData.uid];
    }
    await this.addDrawnUids(nameArray);
    this.setupData.exchangees = newExs;
    console.log(newExs);
    console.log("handleUsers(): Completed");
  }

  async addDrawnUids(names) {
    const properties = Object.keys(this.setupData.exchangees);
    for (const prop of properties) {
      console.log(properties);
      let user = this.setupData.exchangees[prop];
      console.log(user);
      console.log(names);
      user.drawnUid = names[user.tempId].uid;
    }
  }

  getData() {
    return this.setupData;
  }

  printData() {
    console.log(this.setupData ? this.setupData : "no data in this.setupData");
  }

  async drawNames(prod = true) {
    let errors = false;
    let people = [];
    if (prod) {
      people = this.setupData.exchangees;
    } else {
      people = Object.assign([], this.setupData.exchangees);
    }
    const verifyGiftPartners = people =>
      people.every(person => person.nameDrawn);
    const setNameDrawnToBlank = people =>
      people.forEach(person => (person.nameDrawn = ""));

    //Knuth shuffle
    const shuffleArray = array => {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    };

    const assignGiftPartners = function(people) {
      var peopleLeftToAssign = people.map(person => person.name);

      people.forEach(function(person) {
        var choices = peopleLeftToAssign.filter(function(personToAssign) {
          return (
            personToAssign != person.name && personToAssign != person.excluded
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
        console.log("Something went wrong with the assignment");
        errors = true;
        break;
      }
      if (!allAssigned) {
        setNameDrawnToBlank(people);
      }
    }

    //save choices into database
    if (errors) {
      console.log("there were errors while drawing names");
    } else {
      console.log(people);
    }
    console.log("names drawn");
  }
}

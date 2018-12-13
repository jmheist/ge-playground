import { Injectable } from "@angular/core";
import { DbServiceService } from "../services/db-service.service";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root"
})
export class SetupService {
  private setupData;

  constructor(private db: DbServiceService) {
    this.setupData = {
      adminame: "Jacob Heisterkamp",
      adminEmail: "jmheist@gmail.com",
      exchangees: [
        {
          name: "stacey",
          email: "stacey@email.com",
          excluded: "dave",
          tempId: 55634668
        },
        {
          name: "dave",
          email: "dave@email.com",
          excluded: "",
          tempId: 16286482
        },
        {
          name: "deb",
          email: "deb@email.com",
          excluded: "Jacob Heisterkamp",
          tempId: 43515227
        },
        {
          name: "grant",
          email: "grant@email.com",
          excluded: "",
          tempId: 86040254
        },
        {
          name: "kristin",
          email: "kristin@email.com",
          excluded: "",
          tempId: 55653552
        },
        {
          name: "Jacob Heisterkamp",
          email: "jmheist@gmail.com",
          isAdmin: true,
          tempId: 99072227,
          excluded: ""
        }
      ],
      name: "Best Heisterkamp Family Exchange",
      date: { year: 2018, month: 11, day: 15 },
      budget: "20",
      nameCount: "1",
      includeAdmin: true,
      welcomeMessage: "Hello Everyone!",
      adminName: "Jacob Heisterkamp",
      adminAdded: true
    };
  }

  addData(data) {
    if (data) {
      for (let key in data) {
        this.setupData[key] = data[key];
      }
    }
  }

  async createExchange() {
    let exchangees = {};
    let adminUid;
    console.log("createExchange(): Starting");
    this.setupData.uid = await this.db.addExchange(this.setupData);
    const properties = Object.keys(this.setupData.exchangees);
    for (const prop of properties) {
      await this.db
        .addExchangeesToExchange(
          this.setupData.uid,
          this.setupData.exchangees[prop]
        )
        .then(exId => {
          if (this.setupData.exchangees[prop].isAdmin) {
            adminUid = exId;
          }
          exchangees[exId] = this.setupData.exchangees[prop];
        });
    }
    await this.addDrawnIds(exchangees);
    // add adminUid to exchange
    if (adminUid) {
      await this.db.updateExchange(this.setupData.uid, {'adminUid': adminUid});
    } else {
      await this.db.createAdminUid(this.setupData.uid);
    }
    console.log("createExchange(): Finished");
  }

  async addDrawnIds(exchangees) {
    console.log("addDrawnIds(): Starting");
    const properties = Object.keys(exchangees);
    for (const id of properties) {
      let ex = exchangees[id];

      for (const drawnId of properties) {
        let exDrawn = exchangees[drawnId];
        if (ex.nameDrawn === exDrawn.name) {
          ex.drawnUid = drawnId;
        }
      }

      if (!!ex.drawnUid) {
        await this.db.updateExchagee(this.setupData.uid, id, ex);
      }

    }
    console.log("addDrawnIds(): Finished");
    return;
  }

  async addUsers() {
    console.log("addUsers(): Started");
    // add admin if not included
    if (!this.setupData.includeAdmin) {
      const admin = {'name': this.setupData.adminName, 'email': this.setupData.adminEmail}
      console.log(`adding ${admin.name}`)
      await this.db.addUser(admin, this.setupData.uid);
    }
    const properties = Object.keys(this.setupData.exchangees);
    for (const prop of properties) {
      var user = this.setupData.exchangees[prop];
      console.log(`adding ${user.name}`)
      await this.db.addUser(user, this.setupData.uid);
    }
    console.log("addUsers(): Completed");
  }

  async sendSetupToFirestore() {
    await this.drawNames();
    await this.createExchange();
    await this.addUsers();
    this.finish();
  }

  finish() {
    console.log('im done');
  }

  printData() {
    console.log(this.setupData ? this.setupData : "no data in this.setupData");
  }

  getData() {
    return this.setupData;
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
      console.log(peopleLeftToAssign);
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
          console.log(choices);
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

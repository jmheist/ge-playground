import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user.model";
import { DbServiceService } from "src/app/services/db-service.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-exchange-lookup",
  templateUrl: "./exchange-lookup.component.html",
  styleUrls: ["./exchange-lookup.component.scss"]
})
export class ExchangeLookupComponent implements OnInit {
  public user: User;
  public userExchanges: [];
  public exchanges = [];
  private userEmail: "";

  constructor(
    private db: DbServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(async params => {
      this.userEmail = params["userEmail"];
    });
    this.db.getUserOnce(this.userEmail).then(async user => {
      this.user = user;
      this.userExchanges = this.user.exchanges;
      for (let ex of this.userExchanges) {
        const exData = await this.getExchangeInfo(ex, this.userEmail);
        await this.exchanges.push({
          id: ex,
          name: exData.name,
          userId: exData.userId
        });
      }
    });
  }

  ngOnInit() {}

  async getExchangeInfo(exId, userEmail): Promise<any> {
    let exData = {};
    return this.db.getExchangeOnce(exId).then(async exchange => {
      exData["name"] = exchange.name;
      if ((userEmail = exchange.adminEmail)) {
        exData["userId"] = await exchange.adminUid;
      } else {
        await this.db.getExchangePeopleOnce(exId).then(async people => {
          for (let person in people) {
            if (people[person].email == userEmail) {
              exData["userId"] = people[person].id;
            }
          }
        });
      }
      return exData;
    });
  }
}

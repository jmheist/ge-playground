import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DbServiceService } from "../../../services/db-service.service";
import { Observable } from "rxjs";
import { Exchange } from "../../../models/exchange.model";
import { User } from "src/app/models/user.model";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-verify-email",
  templateUrl: "./verify-email.component.html",
  styleUrls: ["./verify-email.component.scss"]
})
export class VerifyEmailComponent implements OnInit {
  public exchange: Observable<Exchange>;
  public people: Observable<any>;
  public currentUser: User;
  public isAdmin: boolean;
  public showAdminNames: string;
  public includeAdmin: boolean;
  public participant: boolean;
  private exchangeId: string;
  private curentUserId: string;

  private exchangeDoc: Exchange;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private db: DbServiceService,
    private userSrv: UserService
  ) {
    this.route.parent.params.subscribe(async params => {
      this.exchangeId = params["exchangeId"];
      this.curentUserId = params["curentUserId"];
      this.exchange = await this.db.getExchange(this.exchangeId);
      await this.db
        .getExchangee(this.exchangeId, this.curentUserId)
        .subscribe(async user => {
          if (user) {
            this.currentUser = user;
            this.isAdmin = this.currentUser.isAdmin || false;
            await this.exchange.subscribe(async exchange => {
              this.exchangeDoc = exchange;
              this.verify();
            });
          } else {
            await this.exchange.subscribe(async exchange => {
              this.exchangeDoc = exchange;
              if (
                !exchange.includeAdmin &&
                this.curentUserId === exchange.adminUid
              ) {
                this.currentUser = {
                  name: exchange.adminName,
                  uid: exchange.adminUid
                };
                this.isAdmin = true;
              }
              this.verify();
            });
          }

          
        });
    });
  }

  ngOnInit() {}

  verify() {
    console.log(this.exchangeDoc);
    if (
      this.isAdmin &&
      !this.exchangeDoc.hasOwnProperty("adminVerifiedEmail")
    ) {
      // verify the exchange
      console.log("verifying");
      this.db.updateExchange(this.exchangeId, {
        adminVerifiedEmail: true
      });
    }
  }
}

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DbServiceService } from "src/app//services/db-service.service";
import { Observable } from "rxjs";
import { Exchange } from "src/app//models/exchange.model";
import { User } from "src/app/models/user.model";
import { UserService } from "src/app/services/user.service";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { SetupService } from "src/app/services/setup.service";

@Component({
  selector: "app-update-email",
  templateUrl: "./update-email.component.html",
  styleUrls: ["./update-email.component.scss"]
})
export class UpdateEmailComponent implements OnInit {
  public savedMsg: string;
  public savedMsgPass: boolean;
  public exchangeId: string;
  public curentUserId: string;
  public uidToUpdate: string;
  public userToUpdate: any;
  public emailForm: FormGroup;

  public exchange: Observable<Exchange>;
  public currentUser: User;
  public isAdmin: boolean;

  constructor(
    private _setupService: SetupService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private db: DbServiceService,
    private userSrv: UserService
  ) {
    this.route.parent.params.subscribe(async params => {
      this.exchangeId = params["exchangeId"];
      this.curentUserId = params["curentUserId"];
      await this.route.params.subscribe(async params => {
        this.uidToUpdate = params["uidToUpdate"];
      });
      this.exchange = await this.db.getExchange(this.exchangeId);
      await this.db
        .getExchangee(this.exchangeId, this.curentUserId)
        .subscribe(async user => {
          if (user) {
            this.currentUser = user;
            this.isAdmin = this.currentUser.isAdmin || false;
            this.exchange.subscribe(async exchange => {
              // this.showAdminNames = exchange.showAdminNames ? "Yes" : "No";
              // this.includeAdmin = exchange.includeAdmin;
            });
          } else {
            this.exchange.subscribe(async exchange => {
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
            });
          }
          if (this.uidToUpdate != "self") {
            await this.db
              .getExchangee(this.exchangeId, this.uidToUpdate)
              .subscribe(async user => {
                this.userToUpdate = user;
              });
          } else {
            this.userToUpdate = this.currentUser;
          }
        });
    });
  }

  ngOnInit() {
    this.emailForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]]
    });
  }

  submitData() {
    const newEmail = this.emailForm.get("email").value;

    if (this.uidToUpdate == "self") {
      // update your own email address
      this.db
        .updateExchagee(this.exchangeId, this.currentUser.id, {
          email: newEmail
        })
        .then(updatedUser => {
          this.db.addUser(this.userToUpdate, this.exchangeId).then(data => {
            // console.log("saved msg");
            this.setSavedMsg(
              `${this.userToUpdate.name}'s Email Address Has Been Updated.`,
              true
            );
          });
        });
    } else if (this.uidToUpdate && this.uidToUpdate != "") {
      // update some one elses email address
      if (this.isAdmin) {
        this.db
          .updateExchagee(this.exchangeId, this.uidToUpdate, {
            email: newEmail
          })
          .then(updatedUser => {
            this.db.addUser(this.userToUpdate, this.exchangeId).then(data => {
              // console.log("saved msg");
              this.setSavedMsg(
                `${this.userToUpdate.name}'s Email Address Has Been Updated.`,
                true
              );
            });
          });
      } else {
        // console.log("you are not an admin");
      }
      this.setSavedMsg(`There was a problem.`, false);
    }
  }

  setSavedMsg(txt, pass: boolean) {
    this.savedMsg = txt;
    this.savedMsgPass = pass;
    if (this.savedMsg && this.savedMsg != "") {
      setTimeout(() => {
        this.savedMsg = null;
        this.savedMsgPass = null;
      }, 12000);
    }
  }
}

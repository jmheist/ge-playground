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
  public emailForm: FormGroup;
  public savedMsg: string;
  public savedMsgPass: boolean;

  constructor(
    private _setupService: SetupService,
    private router: Router,
    private fb: FormBuilder,
    private db: DbServiceService
  ) {}

  ngOnInit() {
    this.emailForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]]
    });
  }

  submitData() {
    const email = this.emailForm.get('email').value;;
    console.log(email);
    this.db.getUserOnce(email).then(user => {
      if (user) {
        console.log(user.exchanges);
        this.db.userRequestedEmail(email);
        this.setSavedMsg(`An email has been sent to ${email}!`, true);
      } else {
        this.setSavedMsg('Email address was not found', false);
      }
    });
  }

  setSavedMsg(txt = "", pass: boolean) {
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


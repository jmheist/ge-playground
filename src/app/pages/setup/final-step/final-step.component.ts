import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SetupService } from "../../../services/setup.service";
import { FormBuilder, FormArray, FormGroup, Validator } from "@angular/forms";

@Component({
  selector: "app-final-step",
  templateUrl: "./final-step.component.html",
  styleUrls: ["./final-step.component.scss"]
})
export class FinalStepComponent implements OnInit {
  private sent: boolean;
  public savedMsg: string;
  public savedMsgPass: boolean;

  constructor(
    private _setupService: SetupService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  public formData = this._setupService.getData();

  ngOnInit() {
    if (!this.sent) {
      this.send();
      this.sent = true;
    }
  }

  setSavedMsg(txt, pass: boolean) {
    this.savedMsg = txt;
    this.savedMsgPass = pass;
    if (this.savedMsg && this.savedMsg != "") {
      setTimeout(() => {
        this.savedMsg = null;
        this.savedMsgPass = null;
      
        this.router.navigate(["/"]);
      
      }, 12000);
    }
  }

  async send() {
    await this._setupService.sendSetupToFirestore().then(passed => {
      if (passed) {
        this.setSavedMsg("You will be redirected back to the home page in 12 seconds.", true);
      } else {
        this.setSavedMsg("There was a problem creating your exchange. You will be returned to the starting page.", false);
      }
    });
  }
}

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SetupService } from "../../../services/setup.service";
import { FormBuilder, FormArray, FormGroup, Validators } from "@angular/forms";
import { controlNameBinding } from "@angular/forms/src/directives/reactive_directives/form_control_name";
import { Angulartics2 } from "angulartics2";

@Component({
  selector: "app-step2",
  templateUrl: "./step2.component.html",
  styleUrls: ["./step2.component.scss"]
})
export class Step2Component implements OnInit {
  constructor(
    private _setupService: SetupService,
    private router: Router,
    private fb: FormBuilder,
    private angulartics2: Angulartics2
  ) {}

  public formData = this._setupService.getData();
  public step2Form: FormGroup;

  getExchangees() {
    return this.step2Form.get("exchangees") as FormArray;
  }

  ngOnInit() {
    this.step2Form = this.fb.group({
      adminName: [
        this.formData.adminName,
        [Validators.required, Validators.minLength(3)]
      ],
      adminEmail: [
        this.formData.adminEmail,
        [Validators.required, Validators.email]
      ],
      exchangees: this.fb.array([])
    });

    if (
      this.formData.hasOwnProperty("exchangees") &&
      this.formData.exchangees.length > 0
    ) {
      this.formData.exchangees.forEach(ex => {
        if (ex.name != "" && ex.email != "") {
          this.addNames(ex.name, ex.email);
        }
      });
    }
    this.addNames();

    this.getExchangees().valueChanges.subscribe(controls => {
      for (let i = 0; i < controls.length; i++) {
        const name = this.getExchangees().controls[i].get("name");
        const email = this.getExchangees().controls[i].get("email");
        if (name.value != "") {
          email.setValidators([Validators.required, Validators.email]);
        } else {
          email.clearValidators();
        }
        if (email.value != "") {
          name.setValidators(Validators.required);
        } else {
          name.clearValidators();
        }
        name.updateValueAndValidity({ emitEvent: false });
        email.updateValueAndValidity({ emitEvent: false });
      }
    });
  }

  createNameField(exName = "", exEmail = ""): FormGroup {
    return this.fb.group({
      name: [exName],
      email: [exEmail, Validators.email]
    });
  }

  get exchangees() {
    return this.step2Form.get("exchangees") as FormArray;
  }

  addNames(exName = "", exEmail = "") {
    this.exchangees.push(this.createNameField(exName, exEmail));
  }

  back() {
    this.router.navigate(["setup/step1"]);
  }

  get getTempId() {
    return Math.floor(Math.random() * 100000000 + 1);
  }

   hasDuplicates(array) {
    var valuesSoFar = Object.create(null);
    for (var i = 0; i < array.length; ++i) {
      var value = array[i];
      if (value in valuesSoFar) {
        console.log(value);
        array[i] = value + " #2";
      }
      valuesSoFar[value] = true;
    }
    return array;
  }

  submitData() {
    // prevent blanks, and long live exlcudes saved previously
    var cleanedExs = [];
    for (let i = 0; i < this.step2Form.value.exchangees.length; i++) {
      const ex = this.step2Form.value.exchangees[i];
      if (ex.name != "" && ex.email != "") {
        if (this.formData.hasOwnProperty("exchangees")) {
          for (let l = 0; l < this.formData.exchangees.length; l++) {
            const savedEx = this.formData.exchangees[l];
            if (
              savedEx.name === ex.name &&
              savedEx.hasOwnProperty("excluded")
            ) {
              ex.excluded = savedEx.excluded;
            }
          }
        }
        // ex.tempId = this.getTempId;
        cleanedExs.push(ex);
      }
    }
    // console.log(cleanedExs);
    // add admin to exchangees if aplicable
    if (this.formData.includeAdmin && !this.formData.adminAdded) {
      cleanedExs.push({
        name: this.step2Form.value.adminName,
        email: this.step2Form.value.adminEmail,
        isAdmin: true
        // tempId: this.getTempId
      });
      this.formData.adminAdded = true;
    }

    this.step2Form.value.exchangees = cleanedExs;
    this._setupService.addData(this.step2Form.value);
    this.angulartics2.eventTrack.next({
      action: "go to step 3",
      properties: {
        category: "setup"
      }
    });
    this.router.navigate(["setup/step3"]);
  }
}

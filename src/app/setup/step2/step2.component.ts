import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Setup } from '../../setup';
import { SetupService } from '../../services/setup.service';
import { FormBuilder, FormArray, FormGroup, Validator } from '@angular/forms';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {

  constructor(
    private _setupService: SetupService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  public formData = this._setupService.getData();

  ngOnInit() {
    if (this.formData.hasOwnProperty('exchangees') && this.formData.exchangees.length > 0) {
      this.formData.exchangees.forEach(ex => {
        if (ex.name != '' && ex.email != '') {
          this.addNames(ex.name, ex.email);
        }
      });
    }
    this.addNames();
  }

  step2Form = this.fb.group({
    adminName: [this.formData.adminName],
    adminEmail: [this.formData.adminName],
    exchangees: this.fb.array([])
  });

  createNameField(exName = '', exEmail = ''): FormGroup {
    return this.fb.group({
      name: [exName],
      email: [exEmail]
    })
  }

  get exchangees() {
    return this.step2Form.get('exchangees') as FormArray;
  }

  addNames(exName = '', exEmail = '') {
    this.exchangees.push(this.createNameField(exName, exEmail));
  }

  back() {
    this.router.navigate(['setup/step1']);
  }

  submitData() {

    // prevent blanks, and long live exlcudes saved previously
    var cleanedExs = [];

    for (let i = 0; i < this.step2Form.value.exchangees.length; i++) {
      const ex = this.step2Form.value.exchangees[i];
      if (ex.name != "" && ex.email != "") {
        if (this.formData.hasOwnProperty('exchangees')) {
          for (let l = 0; l < this.formData.exchangees.length; l++) {
            const savedEx = this.formData.exchangees[l];
            if (savedEx.name === ex.name && savedEx.hasOwnProperty('excluded')) {
              ex.excluded = savedEx.excluded;
            }
          }
        }
        cleanedExs.push(ex);
      }
    }

    // add admin to exchangees if aplicable
    if (this.formData.includeAdmin && !this.formData.adminAdded) {
      cleanedExs.push({ name: this.formData.adminName, email: this.formData.adminEmail });
      this.formData.adminAdded = true;
    }

    this.step2Form.value.exchangees = cleanedExs;
    this._setupService.addData(this.step2Form.value);
    this.router.navigate(['setup/step3']);
  }

}

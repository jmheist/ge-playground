import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Setup } from '../../setup';
import { SetupService } from '../../services/setup.service';
import { FormBuilder, FormArray, FormGroup, Validator } from '@angular/forms';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit {

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
          this.addField(ex.excluded);
        }
      });
    }
  }

  step3Form = this.fb.group({
    exchangees: this.fb.array([])
  });

  get exchangees() {
    return this.step3Form.get('exchangees') as FormArray;
  }

  addField(selected = '') {
    this.exchangees.push(this.fb.control(selected));
  }

  submitData() {

    var organizedData = this.formData;
    var i = 0;
    for (const ex in organizedData) {
      if (organizedData.hasOwnProperty(ex) && organizedData.exchangees[i] && this.step3Form.value.exchangees[i] != '') {
        organizedData.exchangees[i].excluded = this.step3Form.value.exchangees[i];
      }
      i++;
    }

    this._setupService.addData(organizedData);
    this.router.navigate(['setup/step4']);
  }

  back() {
    this.router.navigate(['setup/step2']);
  }

}

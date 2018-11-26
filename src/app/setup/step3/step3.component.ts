import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

    var exchangees = [];
    for (let i = 0; i < this.formData.exchangees.length; i++) {
      const savedEx = this.formData.exchangees[i];
      const stepEx = this.step3Form.value.exchangees[i];
      savedEx['excluded'] = stepEx || "";
      exchangees.push(savedEx);
    }

    const res = {'exchangees': exchangees};

    this._setupService.addData(res);
    this.router.navigate(['setup/step4']);
  }

  back() {
    this.router.navigate(['setup/step2']);
  }

}

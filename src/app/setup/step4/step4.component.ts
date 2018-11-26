import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SetupService } from '../../services/setup.service';
import { FormBuilder, FormArray, FormGroup, Validator } from '@angular/forms';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss']
})
export class Step4Component implements OnInit {

  constructor(
    private _setupService: SetupService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  public formData = this._setupService.getData();
  
  step4Form = this.fb.group({
    welcomeMessage: [this.formData.welcomeMessage],
  });

  ngOnInit() {
  }

  back() {
    this.router.navigate(['setup/step3']);
  }

  submitData() {
    this._setupService.addData(this.step4Form.value);
    this.router.navigate(['setup/finalize']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Setup } from '../../setup';
import { SetupService } from '../../services/setup.service';
import { FormBuilder, FormArray, FormGroup, Validator } from '@angular/forms';

@Component({
  selector: 'app-final-step',
  templateUrl: './final-step.component.html',
  styleUrls: ['./final-step.component.scss']
})
export class FinalStepComponent implements OnInit {

  constructor(
    private _setupService: SetupService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  public formData = this._setupService.getData();

  ngOnInit() {
    this._setupService.sendSetupToFirestore()
  }


}

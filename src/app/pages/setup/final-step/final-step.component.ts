import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SetupService } from '../../../services/setup.service';
import { FormBuilder, FormArray, FormGroup, Validator } from '@angular/forms';

@Component({
  selector: 'app-final-step',
  templateUrl: './final-step.component.html',
  styleUrls: ['./final-step.component.scss']
})
export class FinalStepComponent implements OnInit {

  private sent: boolean;

  constructor(
    private _setupService: SetupService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  public formData = this._setupService.getData();

  ngOnInit() {
    if (!this.sent) {
      this.send();
      this.sent = true;
    }
  }

  send() {
    this._setupService.sendSetupToFirestore()
  }

}

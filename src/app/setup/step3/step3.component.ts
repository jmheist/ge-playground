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

  ngOnInit() {
  }

  back() {
    this.router.navigate(['setup/step2']);
  }

}

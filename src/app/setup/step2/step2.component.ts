import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Setup } from '../../setup';
import { SetupService } from '../../services/setup.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {

  constructor(private _setupService: SetupService, private router: Router) { }

  ngOnInit() {
  }

  step2FormData = this._setupService.getData();
  
  step2Form = new FormGroup({
    adminName: new FormControl('Jacob'),
    adminEmail: new FormControl('jmheist@gmail.com'),
    exchangee: new FormGroup({
      exchangeeName: new FormControl('exchangee one'),
      exchangeeEmail: new FormControl('exchangeeOne@email.com')
    })
  });

  submitData() {
    var organizedData = {};

    organizedData['adminName'] = this.step2FormData.adminName;
    organizedData['adminEmail'] = this.step2FormData.adminEmail;

    // for (var i = this.step2FormData.length - 1; i >= 0; i--) {
    //   this.step2FormData[i]
    // }

    this._setupService.addData(organizedData);
  	this.router.navigate(['setup/step3']);
  }

}

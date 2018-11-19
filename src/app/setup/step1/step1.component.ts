import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Setup } from '../../setup';
import { SetupService } from '../../services/setup.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {

	constructor(private _setupService: SetupService, private router: Router) { }

	ngOnInit() {
	}

	step1FormData = this._setupService.getData();

	submitData() {
		this._setupService.addData(this.step1FormData);
		this.router.navigate(['setup/step2']);
	}

}

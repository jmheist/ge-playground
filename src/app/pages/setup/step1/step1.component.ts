import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SetupService } from '../../../services/setup.service';

@Component({
	selector: 'app-step1',
	templateUrl: './step1.component.html',
	styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {

	constructor(private _setupService: SetupService, private router: Router) { }

	ngOnInit() {
	}

	formData = this._setupService.getData();

	submitData() {
		this._setupService.addData(this.formData);
		this.router.navigate(['setup/step2']);
	}

}

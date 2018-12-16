import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SetupService } from '../../../services/setup.service';
import { Angulartics2Module, Angulartics2 } from "angulartics2";

@Component({
	selector: 'app-step1',
	templateUrl: './step1.component.html',
	styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {

	constructor(private _setupService: SetupService, private router: Router, private angulartics2: Angulartics2) { }

	ngOnInit() {
	}

	formData = this._setupService.getData();

	submitData() {
		this._setupService.addData(this.formData);
		this.angulartics2.eventTrack.next({ 
			action: 'go to step 2',
			properties: { 
			  category: 'setup'
			},
		  });
		this.router.navigate(['setup/step2']);
	}

}

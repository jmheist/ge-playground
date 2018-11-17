import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Step1 } from '../../setup';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {

	step1FormData = new Step1('Exhange Name 2', { "year": 2018, "month": 11, "day": 15 }, 100);

	constructor() { }

	ngOnInit() {
	}

	submitData() {
		
	}

}

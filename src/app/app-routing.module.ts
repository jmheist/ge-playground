import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './template/home/home.component';
import { SetupComponent } from './setup/setup.component';
import { Step1Component } from './setup/step1/step1.component';
import { Step2Component } from './setup/step2/step2.component';
import { Step3Component } from './setup/step3/step3.component';
import { Step4Component } from './setup/step4/step4.component';
import { FinalStepComponent } from './setup/final-step/final-step.component';
import { ListExchangesComponent } from './list-exchanges/list-exchanges.component';

const routes: Routes = [
	{ 
		path: '', 
		component: HomeComponent 
	},
	{ 
		path: 'setup',
		component: SetupComponent,
		children: [
			{ path: 'step1', component: Step1Component },
			{ path: 'step2', component: Step2Component },
			{ path: 'step3', component: Step3Component },
			{ path: 'step4', component: Step4Component },
			{ path: 'finalize', component: FinalStepComponent },
		]
	},
	{ path: 'list-all', component: ListExchangesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

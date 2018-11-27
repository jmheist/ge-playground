import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SetupComponent } from './setup/setup.component';
import { Step1Component } from './setup/step1/step1.component';
import { Step2Component } from './setup/step2/step2.component';
import { Step3Component } from './setup/step3/step3.component';
import { Step4Component } from './setup/step4/step4.component';
import { FinalStepComponent } from './setup/final-step/final-step.component';
import { ListExchangesComponent } from './pages/list-exchanges/list-exchanges.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ExchangeAdminComponent } from './pages/admin/exchange-admin/exchange-admin.component';
import { UpdateEmailComponent } from './pages/admin/update-email/update-email.component';
import { ExchangeComponent } from './pages/exchange/exchange.component';
import { WishlistComponent } from './pages/exchange/wishlist/wishlist.component';
import { DrawComponent } from './pages/exchange/draw/draw.component';

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
	{ 
		path: 'admin', 
		component: AdminComponent,
		children: [
			{ 
				path: ':id', // check user id here too, if not admin, send to normal group page
				component: ExchangeAdminComponent,
				children: [
					{ path: 'updateEmail/:idToUpdate', component: UpdateEmailComponent }
				]
			},
		]
	},
	{
		path: 'exchange/:id', 
		component: ExchangeComponent,
		children: [
			{ path: 'wishlist/:userId', component: WishlistComponent },
			{ path: 'draw/:currentUser/:userId', component: DrawComponent }
		]
	},
	{ path: 'list-all', component: ListExchangesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

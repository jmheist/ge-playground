import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SetupComponent } from './pages/setup/setup.component';
import { Step1Component } from './pages/setup/step1/step1.component';
import { Step2Component } from './pages/setup/step2/step2.component';
import { Step3Component } from './pages/setup/step3/step3.component';
import { Step4Component } from './pages/setup/step4/step4.component';
import { FinalStepComponent } from './pages/setup/final-step/final-step.component';
import { ListExchangesComponent } from './pages/list-exchanges/list-exchanges.component';
// import { AdminComponent } from './pages/admin/admin.component';
// import { ExchangeAdminComponent } from './pages/admin/exchange-admin/exchange-admin.component';
// import { UpdateEmailComponent } from './pages/admin/update-email/update-email.component';
import { ExchangeComponent } from './pages/exchange/exchange.component';
import { WishlistComponent } from './pages/exchange/wishlist-home/wishlist/wishlist.component';
import { DrawComponent } from './pages/exchange/wishlist-home/draw/draw.component';
import { WishlistSavedComponent } from './pages/exchange/wishlist-home/wishlist-saved/wishlist-saved.component';
import { WishlistHomeComponent } from './pages/exchange/wishlist-home/wishlist-home.component';
import { ExchangeViewComponent } from './pages/exchange/exchange-view/exchange-view.component';
import { SendLoginEmailComponent } from './pages/send-login-email/send-login-email.component';
import { UpdateEmailComponent } from './pages/exchange/exchange-view/update-email/update-email.component';

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
	// { 
	// 	path: 'admin', 
	// 	component: AdminComponent,
	// 	children: [
	// 		{ 
	// 			path: ':id', // check user id here too, if not admin, send to normal group page
	// 			component: ExchangeAdminComponent,
	// 			children: [
	// 				{ path: 'updateEmail/:idToUpdate', component: UpdateEmailComponent }
	// 			]
	// 		},
	// 	]
	// },
	{
		path: 'exchange/:exchangeId/:curentUserId', 
		component: ExchangeComponent,
		children: [
			{ path: '', component: ExchangeViewComponent,  },
			{ path: 'update-email/:uidToUpdate', component: UpdateEmailComponent },
			{ path: 'wishlist', component: WishlistHomeComponent, children: [
				{ path: 'edit', component: WishlistComponent },
				{ path: 'edit/wishlistSaved', component: WishlistSavedComponent },
				{ path: 'drawn', component: DrawComponent }
			]}
		]
	},
	{ path: 'sendLoginEmail', component: SendLoginEmailComponent },
	{ path: 'list-all', component: ListExchangesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { SetupComponent } from "./pages/setup/setup.component";
import { Step1Component } from "./pages/setup/step1/step1.component";
import { Step2Component } from "./pages/setup/step2/step2.component";
import { Step3Component } from "./pages/setup/step3/step3.component";
import { Step4Component } from "./pages/setup/step4/step4.component";
import { FinalStepComponent } from "./pages/setup/final-step/final-step.component";
import { ListExchangesComponent } from "./pages/list-exchanges/list-exchanges.component";
// import { AdminComponent } from './pages/admin/admin.component';
// import { ExchangeAdminComponent } from './pages/admin/exchange-admin/exchange-admin.component';
// import { UpdateEmailComponent } from './pages/admin/update-email/update-email.component';
import { ExchangeComponent } from "./pages/exchange/exchange.component";
import { WishlistComponent } from "./pages/exchange/wishlist-home/wishlist/wishlist.component";
import { DrawComponent } from "./pages/exchange/wishlist-home/draw/draw.component";
import { WishlistSavedComponent } from "./pages/exchange/wishlist-home/wishlist-saved/wishlist-saved.component";
import { WishlistHomeComponent } from "./pages/exchange/wishlist-home/wishlist-home.component";
import { ExchangeViewComponent } from "./pages/exchange/exchange-view/exchange-view.component";
import { SendLoginEmailComponent } from "./pages/send-login-email/send-login-email.component";
import { UpdateEmailComponent } from "./pages/exchange/exchange-view/update-email/update-email.component";
import { VerifyEmailComponent } from "./pages/exchange/verify-email/verify-email.component";
import { ExchangeLookupComponent } from "./pages/exchange-lookup/exchange-lookup.component";
import { BadLinkComponent } from "./pages/bad-link/bad-link.component";

const desc = "Create secret santa gift exchanges";
const tags =
  "gift, giving, exchange, secret, santa, christmas, holidays, shopping, family, co-workers, friends";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: {
      title: "Secret Santa Gift Exchange Tool",
      metatags: {
        description: desc,
        keywords: tags
      }
    }
  },
  {
    path: "setup",
    component: SetupComponent,
    data: {
      title: "Gift Exchange Setup",
      metatags: {
        description: desc,
        keywords: tags
      }
    },
    children: [
      { path: "step1", component: Step1Component },
      { path: "step2", component: Step2Component },
      { path: "step3", component: Step3Component },
      { path: "step4", component: Step4Component },
      { path: "finalize", component: FinalStepComponent }
    ]
  },
  {
    path: "exchange/:exchangeId/:curentUserId",
    component: ExchangeComponent,
    data: {
      title: "Your Gift Exchange",
      metatags: {
        description: desc,
        keywords: tags
      }
    },
    children: [
      { path: "", component: ExchangeViewComponent },
      { path: "verify", component: VerifyEmailComponent },
      { path: "update-email/:uidToUpdate", component: UpdateEmailComponent },
      {
        path: "wishlist",
        component: WishlistHomeComponent,
        children: [
          { path: "edit", component: WishlistComponent },
          { path: "edit/wishlistSaved", component: WishlistSavedComponent },
          { path: "drawn", component: DrawComponent }
        ]
      }
    ]
  },
  {
    path: "exchange-lookup/:userEmail",
    component: ExchangeLookupComponent,
    data: {
      title: "Your Exchanges",
      metatags: {
        description: desc,
        keywords: tags
      }
    }
  },
  {
    path: "sendLoginEmail",
    component: SendLoginEmailComponent,
    data: {
      title: "Send a new login email",
      metatags: {
        description: desc,
        keywords: tags
      }
    }
  },
  {
    path: "list-all",
    component: ListExchangesComponent,
    data: {
      title: "See all exchanges",
      metatags: {
        description: desc,
        keywords: tags
      }
    }
  },
  { path: "**", component: BadLinkComponent, data: {
	title: "Page not found",
	metatags: {
	  description: desc,
	  keywords: tags
	}
  } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

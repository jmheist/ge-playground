import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './template/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './template/footer/footer.component';
import { Step2Component } from './pages/setup/step2/step2.component';
import { Step3Component } from './pages/setup/step3/step3.component';
import { Step1Component } from './pages/setup/step1/step1.component';
import { Step4Component } from './pages/setup/step4/step4.component';
import { FinalStepComponent } from './pages/setup/final-step/final-step.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { ListExchangesComponent } from './pages/list-exchanges/list-exchanges.component';

import { DbServiceService } from './services/db-service.service';
import { SetupService } from './services/setup.service';
import { SetupComponent } from './pages/setup/setup.component';
// import { AdminComponent } from './pages/admin/admin.component';
// import { ExchangeAdminComponent } from './pages/admin/exchange-admin/exchange-admin.component';
import { WishlistComponent } from './pages/exchange/wishlist-home/wishlist/wishlist.component';
// import { UpdateEmailComponent } from './pages/admin/update-email/update-email.component';
import { ExchangeComponent } from './pages/exchange/exchange.component';
import { DrawComponent } from './pages/exchange/wishlist-home/draw/draw.component';
import { GroupComponent } from './pages/exchange/group/group.component';
import { WishlistSavedComponent } from './pages/exchange/wishlist-home/wishlist-saved/wishlist-saved.component';
import { WishlistHomeComponent } from './pages/exchange/wishlist-home/wishlist-home.component';
import { FirestoreService } from './services/firestore.service';
import { ExchangeViewComponent } from './pages/exchange/exchange-view/exchange-view.component';
import { SendLoginEmailComponent } from './pages/send-login-email/send-login-email.component';
import { UpdateEmailComponent } from './pages/exchange/exchange-view/update-email/update-email.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    Step2Component,
    Step3Component,
    Step1Component,
    Step4Component,
    FinalStepComponent,
    ListExchangesComponent,
    SetupComponent,
    // AdminComponent,
    // ExchangeAdminComponent,
    WishlistComponent,
    // UpdateEmailComponent,
    ExchangeComponent,
    DrawComponent,
    GroupComponent,
    WishlistSavedComponent,
    WishlistHomeComponent,
    ExchangeViewComponent,
    SendLoginEmailComponent,
    UpdateEmailComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    DbServiceService,
    SetupService,
    FirestoreService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './template/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './template/footer/footer.component';
import { Step2Component } from './setup/step2/step2.component';
import { Step3Component } from './setup/step3/step3.component';
import { Step1Component } from './setup/step1/step1.component';
import { Step4Component } from './setup/step4/step4.component';
import { FinalStepComponent } from './setup/final-step/final-step.component';
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
import { SetupComponent } from './setup/setup.component';
import { AdminComponent } from './pages/admin/admin.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';


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
    AdminComponent,
    WishlistComponent,
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './template/nav/nav.component';
import { HomeComponent } from './template/home/home.component';
import { FooterComponent } from './template/footer/footer.component';
import { StartFormComponent } from './bits/start-form/start-form.component';
import { Step2Component } from './setup/step2/step2.component';
import { Step3Component } from './setup/step3/step3.component';
import { Step1Component } from './setup/step1/step1.component';
import { Step4Component } from './setup/step4/step4.component';
import { FinalStepComponent } from './setup/final-step/final-step.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { ListExchangesComponent } from './list-exchanges/list-exchanges.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    StartFormComponent,
    Step2Component,
    Step3Component,
    Step1Component,
    Step4Component,
    FinalStepComponent,
    ListExchangesComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

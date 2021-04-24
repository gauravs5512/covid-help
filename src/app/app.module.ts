import { HelpServiceService } from './services/help-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Importing Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA3XWBiTatJTG6fXqMuCTnIz7xxepSnxTg',
  authDomain: 'covidhelp-cb8a1.firebaseapp.com',
  databaseURL: 'https://covidhelp-cb8a1.firebaseio.com',
  projectId: 'covidhelp-cb8a1',
  storageBucket: 'covidhelp-cb8a1.appspot.com',
  messagingSenderId: '535760991040',
  appId: '1:535760991040:web:bc41d43472b70b3298c0a5',
  measurementId: 'G-0DEXS57W1F'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [
    HelpServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

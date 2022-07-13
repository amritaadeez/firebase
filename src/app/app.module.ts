
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule
} from '@angular/core';
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS
} from "@angular/common/http";
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
  AppRoutingModule
} from './app-routing.module';
import {
  AppComponent
} from './app.component';
import {
  ApiserviceService
} from './apiservice.service';
import {
  AuthGuard
} from './auth.guard';
import {
  AuthenticationService
} from './auth.service';
import {
  SharedModule
} from './shared/shared.module'
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {
  MatSnackBarModule
} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {  MatDialogModule } from '@angular/material/dialog';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from '../environments/environment';
// import { NgxFileDropModule } from 'ngx-file-drop';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    // NgxFileDropModule
  ],
  
  providers: [
    ApiserviceService,
    AuthenticationService,
    AuthGuard
  ],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}

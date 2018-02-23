import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from "./alerts/warning_alert.component";
import { SuccessAlertComponent } from "./alerts/success-alert.component";
import { AppNavbarComponent } from "./templating/app-navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    WarningAlertComponent,
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

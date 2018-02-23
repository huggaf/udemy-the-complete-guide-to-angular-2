import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WarningAlert } from "./alerts/warning_alert.component";
import { SuccessAlert } from "./alerts/success_alert.component";

@NgModule({
  declarations: [
    AppComponent,
    WarningAlert,
    SuccessAlert
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

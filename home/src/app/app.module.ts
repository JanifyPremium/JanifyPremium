import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component'; // Standalone Component als Import

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AppComponent // Hier wird AppComponent als Standalone Component importiert
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { HttpClientModule } from "@angular/common/http";
import { routing } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule

  ],
  providers: [ ],  
    bootstrap: [AppComponent]
})
export class AppModule { }

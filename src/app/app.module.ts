import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import {CategoryComponent} from './Category';
import {ProductComponent} from './Product';
import {ShopComponent} from './Shop';

import { routing } from "./app.routing";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    HomeComponent,
    ShopComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    routing,
    RouterModule

  ],
  providers: [ ],  
    bootstrap: [AppComponent]
})
export class AppModule { }

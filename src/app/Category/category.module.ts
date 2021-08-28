import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { CategoryModel } from "../model/category/category.model";

import { CategoryComponent } from './category.component';
import { categoryRouting } from './category.routing';

@NgModule({
  imports: [
    CommonModule,
    categoryRouting,
    HttpClientModule
  ],
  exports: [
    CategoryComponent
  ],
  declarations: [
    CategoryComponent
  ],
  providers: [ CategoryModel
  ],
})
export class categoryModule { }
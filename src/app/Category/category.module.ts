import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryComponent } from './category.component';
import { categoryRouting } from './category.routing';

@NgModule({
  imports: [
    CommonModule,
    categoryRouting
  ],
  exports: [
    CategoryComponent
  ],
  declarations: [
    CategoryComponent
  ],
  providers: [
  ],
})
export class categoryModule { }
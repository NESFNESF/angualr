import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './category.component';

import { GetCategory } from './GetCategory';
//import { PostCategory } from './PostCategory';
//import { UpdateCategory } from './UpdateCategory';
//import { OneCategory } from './OneCategory';

const routes: Routes = [
  {
    path: '', component: CategoryComponent, children: [
      { path: '', component: GetCategory },
  //    { path: 'new', component: PostCategory },
  //    { path: 'update', component: UpdateCategory },
  //    { path: 'oneCategory', component: OneCategory },
     
      
      { path: '**', component: GetCategory }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class categoryRouting { }

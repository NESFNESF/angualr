import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home';
//import { CategoryComponent } from './Category';
//import { ProductComponent } from './Product';
//import { ShopComponent } from './Shop';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: HomeComponent, },
   
  {
    path: 'category',
    loadChildren: () => import('./Category')
      .then(mod => mod.categoryModule)
  },  
 /* {
    path: 'product',
    loadChildren: () => import('./Product')
      .then(mod => mod.ProductModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./Shop')
      .then(mod => mod.ShopModule)
  },*/
  
  { path: '**', component: HomeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule],
  declarations: []
})
export class routing { }




import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home';
import { CategoryComponent } from './Category';
import { ProductComponent } from './Product';
import { ShopComponent } from './Shop';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'category', component: CategoryComponent },
    { path: 'product', component: ProductComponent },
    { path: 'shop', component: ShopComponent },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);
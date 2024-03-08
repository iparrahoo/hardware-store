import { Routes } from '@angular/router';

import { ProductsComponent } from './pages/products/products.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

export const routes: Routes = [
    { path: 'products', component: ProductsComponent },
    { path: 'sign-in', component: SignInComponent },
    { path: '',   redirectTo: '/products', pathMatch: 'full' }
];

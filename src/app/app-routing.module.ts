import { LoginComponent } from './components/login/login.component';
import { ElectronicsComponent } from './all-categories/electronics/electronics.component';
import { CheckoutComponent } from './components/check-out/checkout.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'header', component: HeaderComponent
  },
  {
    path: 'categories', component: CategoriesComponent
  },
  {
    path: 'product/:id', component: ProductItemComponent
  },
  {
    path: 'shopping-cart', component: ShoppingCartComponent
  },
  {
    path: 'sign-up', component: SignUpComponent
  },
  {
    path: 'cart', component: CartComponent
  },

  {
    path: 'single-product', component: SingleProductComponent
  },

    {
    path: 'electronics', component: ElectronicsComponent
  },
  {
    path: 'login', component: LoginComponent
  },

  {
    path: 'check-out', component: CheckoutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

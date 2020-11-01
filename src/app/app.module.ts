import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CheckoutComponent } from './components/check-out/checkout.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { ElectronicsComponent } from './all-categories/electronics/electronics.component';
import { LoginComponent } from './components/login/login.component';
import { StoreComponent } from './components/store/store.component';
// import { BrowserAnimationsModule} 
// import { RegisterComponent } from './component/shared/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent,
    ProductListComponent,
    ProductItemComponent,
    HomeComponent,
    ProductComponent,
    CartComponent,
    CategoriesComponent,
    CheckoutComponent,
    SignUpComponent,
    SingleProductComponent,
    ElectronicsComponent,
    LoginComponent,
    StoreComponent
    // RegisterComponent
  ],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

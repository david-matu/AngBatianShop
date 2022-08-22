import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

//import { Observable } from 'rxjs';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { BatianProductComponent } from './components/batian-product/batian-product.component';
import { ShelfComponent } from './components/shelf/shelf.component';
import { ProductAddComponent } from './components/widgets/product-add/product-add.component';
import { FooterComponent } from './footer/footer.component';
import { BatianProductDetailsComponent } from './components/batian-product-details/batian-product-details.component';

registerLocaleData(localePt)

providers: [{
	provide: LOCALE_ID,
	useValue: ""
}];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'batian-product-list', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'batian-product-list', component: ShelfComponent },
      { path: 'batian-products/add', component: ProductAddComponent},
      { path: 'batian-product-details/:productId', component: BatianProductDetailsComponent}
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    BatianProductComponent,
    ShelfComponent,
    ProductAddComponent,
    FooterComponent,
    BatianProductDetailsComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
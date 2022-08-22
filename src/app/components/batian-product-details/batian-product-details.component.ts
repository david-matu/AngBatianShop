import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

//import { Observable, BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

//import * as Rx  from 'rxjs';

import { Product } from '../../model/product';
import { ProductsService, ProductInterface } from '../../services/products.service';

@Component({
  selector: 'app-batian-product-details',
  templateUrl: './batian-product-details.component.html',
  styleUrls: ['./batian-product-details.component.css']
})
export class BatianProductDetailsComponent implements OnInit {
	//batianProduct: Observable<ProductInterface> = new Observable<ProductInterface>;	
	//@Input() product: Observable<ProductInterface> = new Observable<ProductInterface>;
	
	@Input() myProduct?: Product;
	
	constructor(private route: ActivatedRoute, private productsService: ProductsService, public location: Location) { }

	ngOnInit(): void {
  		//const routeParams = this.route.snapshot.paramMap;
  		//const productIdFromRoute = Number(routeParams.get('productId'));
  		/*
  		this.batianProduct = this.productsService.getSingleProduct(productIdFromRoute);
  		let myProd = new Product();
  		
  		this.productsService.getSingleProduct(productIdFromRoute).subscribe(data => {
  			myProd = data;
  			//this.product = data;
  		});
  		
  		this.product = this.productsService.getSingleProduct(productIdFromRoute);
  		
  		console.log("Showing my product info: " +  JSON.stringify(myProd));
  		let act = this.product.subscribe(val => {
  			this.product = this.productsService.getSingleProduct(productIdFromRoute);
  			console.log("Value received after async: " + JSON.stringify(val));
  		});
  		
  		console.log("Calling the Async method as variable batianProduct: " + JSON.stringify(this.batianProduct));
  		*/
  		this.getProduct();
	}
	
	getProduct(): void {
		const routeParams = this.route.snapshot.paramMap;
  		const productIdFromRoute = Number(routeParams.get('productId'));
  		
  		this.productsService.getProductByID(productIdFromRoute).subscribe(prod => this.myProduct = prod);
	}
	
	goBack(): void {
		this.location.back();
	}
	
}

import { Component, OnInit } from '@angular/core';

import { ProductsService, ProductInterface } from '../../services/products.service';

@Component({
  selector: 'shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.css']
})
export class ShelfComponent implements OnInit {
	batianProductList: Array<ProductInterface>;
	
  	constructor(private service: ProductsService) {
  		this.batianProductList = [];
  	}

  	ngOnInit(): void {
  		this.service.load().subscribe(batianProductList => this.batianProductList = batianProductList);
  	}

}

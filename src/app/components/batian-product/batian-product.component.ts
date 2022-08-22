import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//import { Product } from '../../model/product';
import { ProductsService, products } from '../../services/products.service';

@Component({
  selector: 'batian-product',
  templateUrl: './batian-product.component.html',
  styleUrls: ['./batian-product.component.css']
})
export class BatianProductComponent implements OnInit {
	@Input() batianProduct: any;	

  	ngOnInit() {}
}

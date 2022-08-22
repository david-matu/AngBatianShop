import { ProductInterface } from '../services/products.service';

export class Product implements ProductInterface {
	productId: number = 0;
	name: string = '';
	description: string = '';
	price: number = 0;
	categoryId: number = 0;
	regDate: number = 0;
}


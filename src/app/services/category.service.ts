import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalVariable } from '../util/global';

let API_URL = GlobalVariable.BASE_API_URL;

export class Category {
	categoryId: number = 0;
	category: string = '';
	description: string = '';
}

export const categoryList :  Array<Category> = [];

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

	constructor(private http: HttpClient) {
		this.load();
	}
	  
  get() {
	  return categoryList.slice();
  }
  
  add(product: Category) {
	  categoryList.push(product);
  }
  
  remove(product: Category) {
	  categoryList.splice(categoryList.indexOf(product), 1);
  }
  
  load() {
	  return this.http.get<Array<Category>>(API_URL + '/productcategory');
  }
}

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Product } from '../model/product';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { GlobalVariable } from '../util/global';

//let products : Array<ProductInterface> = [];
let service = GlobalVariable.BASE_API_URL;

let tempProd: Product = new Product;

export interface ProductInterface {
	productId: number;
	name: string;
	description: string;
	price: number;
	categoryId: number;
	regDate: number;
}

export const products :  Array<ProductInterface> = [];

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  
  get() {
	  return products.slice();
  }
  
  add(product: ProductInterface) {
	  products.push(product);
  }
  
  remove(product: ProductInterface) {
	  products.splice(products.indexOf(product), 1);
  }
  
  load() {
	  return this.http.get<Array<ProductInterface>>(service + '/product');
  }
  
  getProduct(productId: number): Observable<ProductInterface> {
	  const promise = this.getProductHttpResponse(productId);
	  
	  let json = '{}';
	  promise.then(res => { 
		  json = JSON.parse(res);
		  console.log("Received JSON: " + json);
		  
		  console.log("Promise Received: " + JSON.parse(res));
		  tempProd = JSON.parse(res);
	  });
	  
	  //tempProd = JSON.parse(); //new Product();
	  
	  //tempProd = products.find(product => product.productId === productId)!;
	  	  
	  /** This works *
	 var asyncOb = this.http.get(service + '/product/' + productId, {responseType: 'text'}).subscribe(result => {
		  console.log("JSON received for Product Info:\n" + result);
		  tempProd = JSON.parse(result);
		  //console.log("Parsed via JSON.parse(): " + JSON.stringify(tempProd));
		  
		  tempProd.name = tempProd.name;
		  
		  return tempProd;
	  });
	  */
	  
	  //console.log("Returning Product Info: \n" + json);//JSON.stringify(tempProd));
	  //console.log("Received JSON: " + json);
	  
	  
	  
	  //return tempProd;
	  return new Observable<ProductInterface>;
  }
  
  private async getProductHttpResponse(productId: number): Promise<string> {
	  
	  let json = '{}';
	  
	  /*
	  this.http.get(service + '/product/' + productId, {responseType: 'text'}).subscribe(result => {
		  console.log("JSON received for Product Info:\n" + result);
		  tempProd = JSON.parse(result);
		  //console.log("Parsed via JSON.parse(): " + JSON.stringify(tempProd));
		  
		  //tempProd.name = tempProd.name;
		  json = JSON.parse(result);
		  //return JSON.parse(result);
	  });
	  
	  //console.log("Awaited data: " + JSON.stringify(data));
	  */
	  
	  const data = await this.http.get(service + '/product/' + productId, {responseType: 'text'}).toPromise();
	  
	  json = JSON.stringify(data);
	  
	  //console.log("Awaited data: " + JSON.stringify(data));
	  
	  return json;
  }
  
  public getSingleProduct(productId: number): Observable<ProductInterface> {
	  let fetchedProd : Observable<ProductInterface> = new Observable<Product>;
	  let json = '{}';
	  
	  /*
	  this.http.get(service + '/product/' + productId, {responseType: 'text'}).subscribe(result => {
		  console.log("JSON received for Product Info:\n" + result);
		  tempProd = JSON.parse(result);
		  //console.log("Parsed via JSON.parse(): " + JSON.stringify(tempProd));
		  
		  //tempProd.name = tempProd.name;
		  json = JSON.parse(result);
		  //return JSON.parse(result);
	  });
	  
	  //console.log("Awaited data: " + JSON.stringify(data));
	  */
	  
	 // const data = await this.http.get(service + '/product/' + productId, {responseType: 'text'}).toPromise();
	  
	  //json = JSON.stringify(data);
	  
	  //console.log("Awaited data: " + JSON.stringify(data));
	  
	  return fetchedProd;
  }
  
  public getProductByID(productId: number): Observable<Product> {
	  const url = service + '/product/' + productId;
	  
	  return this.http.get<Product>(url).pipe(
			  tap(_ => console.log("Product fetched by id " + productId)),
			  catchError(this.handleError<Product>(`"There was an error fetching product with id ${productId})`))
			  );
  }
  
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
  private log(message: string) {
    //this.messageService.add(`HeroService: ${message}`);
    //"There was an error fetching product with id " + productId)
    console.log(message);
  }
}
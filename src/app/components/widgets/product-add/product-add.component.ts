import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormsModule , NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { GlobalVariable } from '../../../util/global';

import { Product } from '../../../model/product';

@Component({
  selector: 'widget-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
	private BASE_API_URL = GlobalVariable.BASE_API_URL;
	
	categories = ['General', 'Foods', 'Drinks'];
	
	model = new Product();
	
	form: FormGroup = new FormGroup({});
	
	submitted: boolean = false;	
	
	onSubmit() {
		this.submitted = true;
		//this.submitForm(form);
	}
	
	date: Date = new Date();
	
  	constructor(public fb: FormBuilder, private http: HttpClient) {
  		this.form = this.fb.group({
		  name: [''],
		  description: [''],
		  price: [],
		  categoryId: [''],
		  regDate: []	
  		});
  		this.http = http;
  		this.submitted = false;
  	}

  ngOnInit(): void {
	  this.form = new FormGroup({});
  }
  
  submitForm(form: NgForm) {
   /* var formData: any = new FormData(), result = {};
    formData.append('name', this?.form?.get('name')?.value);
    formData.append('description', this?.form?.get('description')?.value);
    formData.append('price', this?.form?.get('price')?.value);
    formData.append('categoryId', this.form.get('categoryId')?.value);
    formData.append('regDate', new Date());
    
    console.log("Model-bound new value -> Name: " + this.model.name);
    for (var entry of formData.entries()) {
        //result[entry[0]] = entry[1];
        console.log(entry[0] + ', ' + entry[1]);
    }
    result = JSON.stringify(result)
    console.log(result);
    
    console.log("Dave: Submitting Product Values: \n" + result);
	*/
 
	//const headers= new HttpHeaders()
	  //.set('content-type', 'application/json')
	  //.set('Access-Control-Allow-Origin', '*');
    var curDate = new Date();
	this.model.regDate = curDate.getTime();
	
	console.log('What we are submitting:\n' +  JSON.stringify(this.model));
	
    this.http
      .post(this.BASE_API_URL + '/product', JSON.stringify(this.model), { headers: new HttpHeaders().set("Content-Type", "application/json")})
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });
  }
  

}

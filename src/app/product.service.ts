import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  private apiUrl = "https://dummyjson.com/products";

  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get(this.apiUrl);
  }

  

}

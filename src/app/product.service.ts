import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  private apiUrl = "https://dummyjson.com/products";
  private apiSearchUrl ="https://dummyjson.com/products/search?q="

  products: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([])
  constructor(private http : HttpClient) { }

  getProduct(){
    
    return this.http.get(this.apiUrl).pipe(tap( (data:any) => this.products.next(data.products)));

  }

  getSearchProduct(keyWord :string){
    return this.http.get(this.apiSearchUrl+keyWord).pipe(tap((data : any ) => this.products.next(data.products)))
  }

  // CRUD Methods
  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addProduct(product: any): Observable<any> {
    return this.http.post(this.apiUrl + '/add', product);
  }

  updateProduct(id: number, product: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  
  

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule } from '@angular/forms';
import { ProductItemComponent } from "./product-item/product-item.component";
import { ReactiveFormsModule } from '@angular/forms';
import { Pipe } from '@angular/core';
import { debounceTime, Subscription, switchMap } from 'rxjs';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductItemComponent,ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit,OnDestroy{
newTitle: any;
newDescription: any;
searchInput = "";
userInput = new FormControl();
subscriptions: Subscription[] =[];
constructor(private Product : ProductService){

}
  ngOnDestroy(): void {
    
    this.subscriptions.forEach((sub:any) => sub.unsubsribe());
  }
arr: any[] = [];
errorMessage = ''

ngOnInit(): void {
  this.Product.getProduct().subscribe({
    next: (data: any) => {
      this.arr = data.products;
    },
    error: (err) => this.errorMessage = `Error: ${err.message}`,
    complete: () => console.log('Completed')
  });


  this.subscriptions.push(this.userInput.valueChanges.pipe(
    debounceTime(1000),
    switchMap((input) => {
      return this.Product.getSearchProduct(input);
    })
  ).subscribe({
    next: (res: any) => {
      console.log(res);
    }
  }));

  this.subscriptions.push(this.Product.products.subscribe((data :any) => this.arr = data))
}
//Create
addProduct(){
  if(!this.newTitle ||!this.newDescription){
    alert("Please enter a valid title or Description")
  }else{
  console.log(this.arr.length + 1)
  const newProduct = {id: this.arr.length + 1,title:this.newTitle,description:this.newDescription}
  console.log(newProduct)
  this.arr.push(newProduct)
  }
}
//Update
updateProduct(e: any){
this.arr.forEach((item)=>{
  if (item.id == e.id){
    item.title = e.title
    item.description = e.description
  }
})
}


//Delete
deleteProduct(e: any){
  this.subscriptions.push(
    this.Product.deleteProduct(e.id).subscribe({
      next: (response) => {
        console.log('Product deleted successfully:', response);
        this.arr = this.arr.filter(item => item.id !== e.id);
      },
      error: (err) => {
        console.error('Error deleting product:', err);
        this.errorMessage = `Error deleting product: ${err.message}`;
      }
    })
  );
}

//Read
fetchProductByName(){
  
     const arr = this.arr.filter((product) =>{
      return product.title.toLowerCase().includes(this.searchInput.toLowerCase())
    }) 
    
}

  
}

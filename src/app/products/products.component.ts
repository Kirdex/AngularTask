import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductItemComponent } from "./product-item/product-item.component";
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductItemComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
newTitle: any;
newDescription: any;
searchInput = "";
constructor(private Product : ProductService){

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
this.arr = this.arr.filter(item => item.id !== e.id);
}

//Read
fetchProductByName(){
  
     const arr = this.arr.filter((product) =>{
      return product.title.toLowerCase().includes(this.searchInput.toLowerCase())
    }) 
    console.log(arr)
}

  
}

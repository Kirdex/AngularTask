import { Component, EventEmitter, Input,OnInit,Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent implements OnInit{

@Input() dataSource :any;
@Output() passUpdate: any  = new EventEmitter<any>();
@Output() passDelete: any = new EventEmitter<any>();
@Output() passId: any = new EventEmitter<any>();

newTitle = ""
newDescription =""
editOn = false;

ngOnInit(): void {
  this.newTitle=this.dataSource.title
  this.newDescription=this.dataSource.description
}

Edit(){
  this.editOn = true;

}

changeProduct(){
const newTask = {id:this.dataSource.id,title:this.newTitle,description:this.newDescription}
this.passUpdate.emit(newTask)
}

deleteProduct(){
  const newTask = {id:this.dataSource.id,title:this.newTitle,description:this.newDescription}
this.passDelete.emit(newTask)
}


}

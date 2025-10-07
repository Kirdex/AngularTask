import { Component, EventEmitter, Input,OnInit,Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HoverHighlightDirective } from '../hover-highlight.directive';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, HoverHighlightDirective],
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit{




buttonClicked = false;
newTitle = ''
newDescription= ''
@Input() details: any;
@Output() passValue = new EventEmitter<any>();
  ngOnInit(): void {
   if(this.details){
    this.newTitle = this.details?.title
    this.newDescription = this.details?.description
    }
  }

  onEdit(){
  if (this.details) {
    this.newTitle = this.details.title ?? '';
    this.newDescription = this.details.description ?? '';
  }
  this.buttonClicked = true;
  }

  Save() {
    const newTask = {title: this.newTitle, description: this.newDescription}
    console.log(newTask)
    this.passValue.emit(newTask)
  }

 


}

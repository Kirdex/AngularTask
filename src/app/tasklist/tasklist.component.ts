import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HoverHighlightDirective } from './hover-highlight.directive';
import { TaskDetailComponent } from "./task-detail/task-detail.component";
import { PipePipe } from './pipe.pipe';


@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HoverHighlightDirective, TaskDetailComponent, PipePipe],
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent {
tasks = [
  {
    // id: 1,
    title: 'Design Homepage Layout',
    description: 'Create wireframes and a mockup for the new homepage layout.',
    // dueDate: new Date('2024-08-20'),
    status: 'Incomplete',
    // priority: 'High',
  },
  {
    // id: 2,
    title: 'Update User Profile Feature',
    description: 'Enhance the user profile page with new fields and validation.',
    // dueDate: new Date('2024-08-15'),
    status: 'In Progress',
    // priority: 'Medium',
  },
  {
    // id: 3,
    title: 'Fix Bugs in Task Management Module',
    description: 'Resolve the bugs reported in the task management module.',
    // dueDate: new Date('2024-08-10'),
    status: 'Completed',
    // priority: 'High',
  },
  {
    // id: 4,
    title: 'Develop Notification System',
    description: 'Implement a notification system for task updates.',
    // dueDate: new Date('2024-08-18'),
    status: 'Incomplete',
    // priority: 'Low',
  },
  {
    // id: 5,
    title: 'Code Review for Authentication Module',
    description: 'Conduct a code review for the recently developed authentication module.',
    // dueDate: new Date('2024-08-12'),
    status: 'In Progress',
    // priority: 'Medium',
  },
  ]

  statuses = ['All', 'Incomplete', 'In Progress', 'Completed'];
  selectedStatus = 'All';

  newTitle = "";
  newDescription = "";
  userInput ="";
 
  title = new FormControl('', Validators.required);
  description = new FormControl('');

  onSubmit(){
    if (this.title.invalid) {
      this.title.markAsTouched();
      return;
    }

  const newTask = { title: this.title.value ?? '', description: this.description.value ?? '', status: 'Incomplete' };
    this.tasks.push(newTask);
    this.title.reset('');
    this.description.reset('');
    console.log(this.tasks)
  }

  triggerEvent(e: Event){
    console.log(e)
  }


  onSearch(){
    console.log(this.userInput)
    const arr = this.tasks.filter((task) =>{
      return task.title.toLowerCase().includes(this.userInput.toLowerCase())
    }) 

    console.log(arr)
  }
  


}

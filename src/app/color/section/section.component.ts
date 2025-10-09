import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent {
@Input() section:any;
@Output() colorSelected = new EventEmitter<string>();


triggerEvent(){
  const color = this.section.color;
  console.log(color);
 this.colorSelected.emit(color);
}
colorVar: any;

ngOnInit() {
  this.colorVar = this.section?.color;
}
}

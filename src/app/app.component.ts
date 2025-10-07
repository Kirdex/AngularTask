import { Component } from '@angular/core';
import { TasklistComponent } from './tasklist/tasklist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TasklistComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularAntra';
}

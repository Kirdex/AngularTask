import { Component } from '@angular/core';
import { TasklistComponent } from './tasklist/tasklist.component';
import { ProductsComponent } from "./products/products.component";
import { ColorComponent } from "./color/color.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TasklistComponent, ProductsComponent, ColorComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularAntra';
}

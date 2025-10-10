import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { ColorComponent } from './color/color.component';
export const routes: Routes = [
    {path:"product", component:ProductsComponent},
    {path:"task", component:TasklistComponent},
    {path:"color", component:ColorComponent},
];

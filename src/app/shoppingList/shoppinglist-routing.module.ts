import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
const routes: Routes = [
    {path: 'shopping-list', component: ShoppingListComponent},
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShoppinglistRoutingModule{}
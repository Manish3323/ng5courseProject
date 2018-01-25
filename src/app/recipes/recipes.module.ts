import { NgModule } from '@angular/core';
import { DropdownDirective } from '../shared/dropdown.directive';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from '../recipeList/recipes.component';
import { RecipeStartComponent } from '../recipes-list/recipe-start/recipe-start.component';
import { RecipeListComponent } from '../recipeList/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from '../recipeList/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from '../recipeList/recipe-item/recipe-item.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
    declarations:[
        RecipesComponent,
        RecipeStartComponent,
        RecipeEditComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent
    ],
    imports:[
        SharedModule,
        ReactiveFormsModule,
        RecipesRoutingModule
    ]

})
export class RecipesModule{

}
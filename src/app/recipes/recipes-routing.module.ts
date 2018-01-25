import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RecipesComponent } from '../recipeList/recipes.component';
import { RecipeStartComponent } from '../recipes-list/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from '../recipeList/recipe-detail/recipe-detail.component';
import { AuthGuard } from '../auth/authguard.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
const recipesRoutes: Routes = [

    {path: 'recipes', component: RecipesComponent, children: [
        {path: '', component: RecipeStartComponent},
        {path: 'new', component: RecipeEditComponent , canActivate:[AuthGuard]},
        {path: 'edit', component: RecipeEditComponent},
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent, canActivate:[ AuthGuard]},
    ]},
]
@NgModule({
    imports:[RouterModule.forChild(recipesRoutes)
    ],
    exports:[RouterModule],
    providers:[AuthGuard]
})
export class RecipesRoutingModule{}
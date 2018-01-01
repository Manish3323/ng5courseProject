import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shoppingList/shopping-list/shopping-list.component';
import { RecipeListComponent } from './recipeList/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipeList/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipeList/recipe-detail/recipe-detail.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingEditComponent } from './shoppingList/shopping-edit/shopping-edit.component';
import { RecipesComponent } from './recipeList/recipes.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './Services/shopping-list.service';
import { RecipesService } from './Services/recipes.service';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    ShoppingEditComponent,
    RecipesComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [ShoppingListService,RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

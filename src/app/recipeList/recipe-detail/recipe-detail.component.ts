import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../../Services/recipes.service';
import { ShoppingListService } from '../../Services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipesService) { }
   ngOnInit() {
   }
   addToShopList(recipe: Recipe){
     this.recipeService.onAddedTolist(this.recipe.ingredients);
   }
}

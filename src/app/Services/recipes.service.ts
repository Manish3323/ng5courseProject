import { Injectable, EventEmitter} from '@angular/core';
import { Recipe } from '../recipeList/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';


@Injectable()
export class RecipesService {
   selectedRec: EventEmitter<Recipe> = new EventEmitter<Recipe>();
   private recipes: Recipe[];
  constructor(private shoppingService: ShoppingListService) {
    this.recipes =  [
      new Recipe('r1', 'a recipe', 'http://goodtoknow.media.ipcdigital.co.uk/111/000016ef4/543a_orh412w625/Butter-chicken-recipe.jpg',[
        new Ingredient('r1kaingredient1',10),
        new Ingredient('r1kaIngredient2',20)
      ]),
      new Recipe('r2', 'a recipe 2', 'https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg',[
        new Ingredient('r2kaIngredient1',30)
      ])
    ];
  }
  getRecipes(){
    return this.recipes.slice();
  }

  onAddedTolist(ingredients:Ingredient[]){
    this.shoppingService.addIngredients(ingredients);
  }
}

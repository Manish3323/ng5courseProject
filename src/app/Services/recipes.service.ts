import { Recipe } from '../recipeList/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class RecipesService {
   private recipes: Recipe[];
    recipesChanged = new Subject<Recipe[]> ();
  constructor(){
    this.recipes =  [
      new Recipe('r1', 'a recipe', 'http://goodtoknow.media.ipcdigital.co.uk/111/000016ef4/543a_orh412w625/Butter-chicken-recipe.jpg',[
        new Ingredient('r1kaingredient1', 10),
        new Ingredient('r1kaIngredient2', 20)
      ]),
      new Recipe('r2', 'a recipe 2', 'https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg',[
        new Ingredient('r2kaIngredient1', 30)
      ])
    ];
  }
  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes.slice()[index];
  }

  AddRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index:number, newRec: Recipe){
    this.recipes[index] = newRec;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index:number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  
}

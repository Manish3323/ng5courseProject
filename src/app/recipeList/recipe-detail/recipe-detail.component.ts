import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../../Services/recipes.service';
import { ShoppingListService } from '../../Services/shopping-list.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Ingredient } from '../../shared/ingredient.model';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../../ShoppingList/store/shopping-list.action';
import * as fromShoppingList from '../../ShoppingList/store/shopping-list.reducer';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  // tslint:disable-next-line:max-line-length
  constructor(private recipeService: RecipesService, private route: ActivatedRoute, private router: Router, private store: Store<fromShoppingList.State>) { }
   ngOnInit() {
     this.route.params.subscribe((params: Params) => {
       this.id = params['id'];
       this.recipe = this.recipeService.getRecipe(this.id);
     });
   }
   addToShopList(recipe: Recipe){
    this.store.dispatch(new ShoppingListActions.AddIngredients(this.recipe.ingredients));
   }
   onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo: this.route});
  }
  onDelete(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}

import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from '../recipeList/recipe.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  ingredients = [
    new Ingredient('apple', 10), new Ingredient('gajar', 20)
  ];
  constructor() { }
  onAddIngredient(ingred: Ingredient){
    this.ingredients.push(ingred);
    this.ingredientsChanged.next(this.ingredients.slice());
  }


  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }
  getIngredients(){
    return this.ingredients.slice();
  }

  updateIngredient(index: number, ingredient: Ingredient){
    this.ingredients[index] = ingredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  onDelete(index: number){
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}

import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from '../recipeList/recipe.model';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients = [
    new Ingredient('apple', 10), new Ingredient('gajar', 20)
  ];
  constructor() { }
  onAddIngredient(ingred: Ingredient){
    this.ingredients.push(ingred);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  getIngredients(){
    return this.ingredients.slice();
  }
  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}

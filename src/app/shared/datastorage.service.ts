import { Injectable } from '@angular/core';

import { RecipesService } from '../Services/recipes.service';

import 'rxjs/Rx';
import { Recipe } from '../recipeList/recipe.model';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DataStorageService {
constructor(private httpClient: HttpClient, private recipeService: RecipesService, private authService: AuthService){}

saveRecipes() {

    return this.httpClient.put('https://ng-recipe-boo-48bf0.firebaseio.com/recipes.json', this.recipeService.getRecipes())
     .map((res:  Response) => {
           return res.json();
     });
   }
fetchRecipes(){

    const  tk = this.authService.getToken();
    return this.httpClient.get<Recipe[]>('https://ng-recipe-boo-48bf0.firebaseio.com/recipes.json?auth=' + tk)
     .map((recipes) => {
        // tslint:disable-next-line:prefer-const
        for ( let each of recipes){
            if(!each['ingredients']){
                each['ingredients'] = [];
            }
        }
        return recipes;
     })
     .subscribe((res: Recipe[]) => {
        this.recipeService.setRecipes(res);
      });
    }
}
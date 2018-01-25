import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../../Services/recipes.service';
import { ActivatedRoute , Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  id: number;
  changeSubscription : Subscription;
  constructor(private recipeService: RecipesService, private route: ActivatedRoute, private router: Router) {   }

  ngOnInit() {
    this.changeSubscription = this.recipeService.recipesChanged.subscribe((recs: Recipe[]) => {
      this.recipes = recs;
    })
    this.recipes = this.recipeService.getRecipes();
  }
  onRecipeSelect(indx: number) {
    this.router.navigate([indx], {relativeTo: this.route});
  }
  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.changeSubscription.unsubscribe();
  }
}

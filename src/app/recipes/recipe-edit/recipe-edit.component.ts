import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RecipesService } from '../../Services/recipes.service';
import { Recipe } from '../../recipeList/recipe.model';
import { FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  editMode = false;
  id: number;
  recipeForm: FormGroup;
  constructor(private route: ActivatedRoute, private recipeService: RecipesService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      this.id = +param['id'];
      this.editMode = param['id'] != null;
      this.initForm();
    })
  }

  onSubmit() {
    const recipe = new Recipe(this.recipeForm.value['name'],
    this.recipeForm.value['description'],
    this.recipeForm.value['imagePath'],
    this.recipeForm.value['ingredients']);
    if(this.editMode){
        this.recipeService.updateRecipe(this.id, recipe);
    }else{
      this.recipeService.AddRecipe(recipe);
    }
    this.router.navigate(['recipes', this.id]);
  }
  onCancel() {
    this.router.navigate(['recipes', this.id]);
  }
  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required,  Validators.pattern(/^[1-9]+[0-9]*$/)])
      }));
  }
  private initForm(){
    let  recipeName = '';
    let recipePath = '';
    let description = '';
    // tslint:disable-next-line:prefer-const
    let recipeIngredients = new FormArray([]);
    if (this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipePath = recipe.imagePath;
      description = recipe.description;
      if(recipe['ingredients']) {
         for(const ingred of recipe.ingredients) {
          recipeIngredients.push( new FormGroup({
            'name': new FormControl(ingred.name, Validators.required),
            'amount': new FormControl(ingred.amount ,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
           }));
         }
      }

    }
    this.recipeForm = new FormGroup({
      'name' : new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipePath, Validators.required),
      'description': new FormControl(description, Validators.required),
      'ingredients': recipeIngredients
    });
  }
  onXIngredient(index: number){
    (<FormArray>this.recipeForm.get('ingredient')).removeAt(index);
  }
getControls(){
 return (<FormArray>this.recipeForm.get('ingredients')).controls;
}
  ngOnDestroy() {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
  }

}

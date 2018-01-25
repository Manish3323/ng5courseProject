import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../Services/shopping-list.service';
import { Subscription } from 'rxjs/Subscription';
import { ViewChild } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromShoppingList from '../store/shopping-list.reducer';
import * as fromApp from '../../store/app.reducer';
import * as ShoppingListActions from '../store/shopping-list.action';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  ingredient: Ingredient;
  subscription: Subscription;
  editMode= false;
  editedItem: Ingredient;
  editIndex: number;
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('ShoppingList').subscribe((data) =>{
      if (data.editedIngredientIndex > -1) {
        this.editMode = true;
        this.editedItem = data.editedIngredient;
        this.editIndex = data.editedIngredientIndex;
      }else{
        this.editMode = false;
        this.editedItem = null;
      }
      this.form.setValue({name: this.editedItem.name, amount: this.editedItem.amount});
    });
  }
  onAddIngredient(form: NgForm) {
    const newIngred = new Ingredient(form.value.name,  form.value.amount);
    if (this.editMode) {
      this.store.dispatch(new ShoppingListActions.UpdateIngredients({index: this.editIndex , newIngredient: newIngred}));
    }else {
       this.store.dispatch(new ShoppingListActions.AddIngredient(newIngred));
    }
    this.editMode = false;
  }
  clearForm(){
    this.editMode = false;
    this.form.reset();
  }
  deleteIngredient(index: number){
    this.store.dispatch(new ShoppingListActions.DeleteIngredient(index));
    this.clearForm();
  }

}

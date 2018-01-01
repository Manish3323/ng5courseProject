import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../Services/shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingredient: Ingredient;

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }
  onAddIngredient(){
    this.shoppingListService.onAddIngredient(new Ingredient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value));
  }

}

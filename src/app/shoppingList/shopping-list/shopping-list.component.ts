import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import * as ShoppingListActions from '../Store/shopping-list.action';
import * as fromApp from '../../store/app.reducer';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingList: Observable<{ingredients: Ingredient[]}>;
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.shoppingList = this.store.select('ShoppingList');
  }
  onEdit(index: number) {
      this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }
}

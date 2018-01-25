import { ActionReducerMap } from '@ngrx/store';
import * as fromShoppingList from '../shoppingList/store/shopping-list.reducer';
import * as fromAuth from '../auth/store/auth.reducer';

export interface AppState {
    ShoppingList: fromShoppingList.State;
    auth: fromAuth.State;
}

export const reducers: ActionReducerMap<AppState> = {
    ShoppingList: fromShoppingList.shoppingListReducer,
    auth: fromAuth.AuthReducer
}

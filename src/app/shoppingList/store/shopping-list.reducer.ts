import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.action';

export interface State{
    ingredients: Ingredient[];
    editedIngredient: Ingredient;
    editedIngredientIndex: number;
}
const initialState: State = {
    ingredients: [
        new Ingredient('apple', 10),
        new Ingredient('gajar', 20)
    ],
    editedIngredient: null ,
    editedIngredientIndex: -1
}
export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions){
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT :
                return {
                            ...state,
                            ingredients: [...state.ingredients, action.payload]
                    }
        case ShoppingListActions.ADD_INGREDIENTS :
                return {
                            ...state,
                            ingredients:[...state.ingredients, ...action.payload]
                    }
        case ShoppingListActions.DELETE_INGREDIENT :
                    const oldIngredients = state.ingredients.splice(state.editedIngredientIndex, 1);
            return {
                            ...state,
                            ingredients: oldIngredients
                    }
        case ShoppingListActions.UPDATE_INGREDIENTS :
                    const ingredient = state.ingredients[state.editedIngredientIndex];
                    const updIngredient = {
                        ...ingredient,
                        ...action.payload.newIngredient
                    }
                    const newIngredients = [...state.ingredients];
                    newIngredients[state.editedIngredientIndex] = updIngredient;
                return {
                            ...state,
                            ingredients: newIngredients,
                            editedIngredient: null,
                            editedIngredientIndex: -1
                    }
        case ShoppingListActions.START_EDIT :
                    const editIngredient = {...state.ingredients[state.editedIngredientIndex]};
                return {
                            ...state,
                            editedIngredient: editIngredient,
                            editedIngredientIndex : state.editedIngredientIndex
                        }
            default :
                return state;
    }
}
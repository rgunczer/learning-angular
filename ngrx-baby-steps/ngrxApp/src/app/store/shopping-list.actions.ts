import { Action } from '@ngrx/store';

export const ADD_INGREDIENT = 'add_ingredient';

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT;

  constructor(public payload: { name: string, quantity: number }) {}
}

export type ShoppingListActions = AddIngredient;

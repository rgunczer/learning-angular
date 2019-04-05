import * as ShoppingListActions from './shopping-list.actions';

const initialState = {
  ingredients: [
    {
      name: 'Apple',
      quantity: 5
    },
    {
      name: 'Tomatoes',
      quantity: 10
    }
  ]
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
      break;

      default:
        return state;
  }
}

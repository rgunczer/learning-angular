import { Action, createAction, on, createReducer } from '@ngrx/store';
// export const INCREMENT = 'INCREMENT';
// export const DECREMENT = 'DECREMENT';

export const INCREMENT = createAction('INCREMENT');
export const DECREMENT = createAction('DECREMENT');

export const initialState = 0;

// export function counterReducer(state = 0, action: Action) {
export const counterReducer = createReducer(initialState,
  // switch (action.type) {
  //   case INCREMENT:
  //     return state + 1;

  //   case DECREMENT:
  //     return state - 1;

  //   default:
  //     return state;
  // }
  on(INCREMENT, state => state + 1),
  on(DECREMENT, state => state - 1)
);
// }

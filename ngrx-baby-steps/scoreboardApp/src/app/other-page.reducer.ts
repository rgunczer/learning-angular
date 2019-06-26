import { Action, createReducer, on } from '@ngrx/store';
import * as OtherPageActions from './other-page.actions';

export interface State {
  otherScore: number;
}

export const initialState: State = {
  otherScore: 0
}

const otherReducer = createReducer(
  initialState,
  on(
    OtherPageActions.setScore,
    (state, ) => ({
      ...state,
      otherScore:
    })
  )
);

export function reducer(state: State | undefined, action: Action) {
  return otherReducer(state, action);
}

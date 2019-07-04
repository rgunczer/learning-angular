import { State, Action, StateContext } from '@ngxs/store';
import { FooAction } from './foo.actions';

export class FooStateModel {
  public items: string[];
}

@State<FooStateModel>({
  name: 'foo',
  defaults: {
    items: []
  }
})
export class FooState {
  @Action(FooAction)
  add(ctx: StateContext<FooStateModel>, action: FooAction) {
    const state = ctx.getState();
    ctx.setState({ items: [ ...state.items, action.payload ] });
  }
}

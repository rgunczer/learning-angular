import { State, Action, StateContext } from '@ngxs/store';
import { ModifySimpleState } from './simple.actions';

export interface SimpleStateModel {
  name: string;
  feed: boolean;
}

@State<SimpleStateModel>({
  name: 'simple',
  defaults: {
    name: 'anonymous',
    feed: false
  }
})
export class SimpleState {

  @Action(ModifySimpleState)
  modifySimpleState(ctx: StateContext<SimpleStateModel>, action: ModifySimpleState) {
    const state = ctx.getState();
    ctx.setState(
      action
    );
  }
}

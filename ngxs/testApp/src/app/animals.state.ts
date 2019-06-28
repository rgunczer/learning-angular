import { State, Action, StateContext } from '@ngxs/store';
import { AddAnimal } from './animal.actions';

@State<string[]>({
  name: 'animalz',
  defaults: []
})
export class AnimalsState {

  @Action(AddAnimal)
  addAnimal(ctx: StateContext<string[]>, action: AddAnimal) {
    const state = ctx.getState();
    ctx.setState([
      ...state,
      action.name
    ]);
  }

}

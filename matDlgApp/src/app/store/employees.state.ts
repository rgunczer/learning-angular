import { State, Action, StateContext } from '@ngxs/store';
import { ModalService } from '../modal.service';
import { tap } from 'rxjs/operators';

export class OpenModal {
  static readonly type = '[Employee] Open Modal';
}

export class OpenColumnModal {
  static readonly type = '[Employee] Open Column Modal';
}

export interface EmployeesStateModel {
  modalOpen: boolean;
  employeeId: number;
  employeeName: string;
  columnModalOpen: boolean;
  allColumns: any[];
}

@State<EmployeesStateModel>({
  name: 'employees',
  defaults: {
    employeeId: null,
    employeeName: '',
    modalOpen: false,
    columnModalOpen: false,
    allColumns: []
  }
})
export class EmployeesState {

  constructor(
    private modalService: ModalService
  ) {
  }

  @Action(OpenModal)
  OpenModal(ctx: StateContext<EmployeesStateModel>) {
    const state = ctx.getState();
    ctx.patchState({ modalOpen: true });
  }

  // @Action(OpenColumnModal)
  // OpenColumnModal(ctx: StateContext<EmployeesStateModel>) {
  //   ctx.patchState({ columnModalOpen: true });
  // }

  @Action(OpenColumnModal)
  openColumnModal(ctx: StateContext<EmployeesStateModel>) {
      const state = ctx.getState();
      const allCols = state.allColumns;
      return this.modalService.openColumnVisibilityModal(allCols).pipe(tap((result) => {
          ctx.setState({
              ...state,
              allColumns: result,
              // userColumns: result.filter(col => col.visible)
          });
      }));
  }

}

import { State, Action, StateContext, NgxsOnInit, Selector } from '@ngxs/store';
import { AddBookAction, GetBooksAction } from './book.actions';
import { ApiService } from '../api.service';

import { tap, map } from 'rxjs/operators';

export interface Book {
  title: string;
  pageCount: number;
  publicationDate: Date;
}

export interface BooksStateModel {
  items: Book[];
}

@State<BooksStateModel>({
  name: 'books',
  defaults: {
    items: [
      // {
      //   title: 'From Here to Eternity',
      //   pageCount: 1000,
      //   publicationDate: new Date(1979, 0, 1)
      // }
    ]
  }
})
export class BooksState implements NgxsOnInit {

  @Selector()
  static getBooks(state: BooksStateModel): Book[] {
    return state.items;
  }

  constructor(private api: ApiService) { }

  ngxsOnInit(ctx: StateContext<BooksStateModel>) {
    ctx.dispatch(new AddBookAction({ title: 'default', pageCount: 1, publicationDate: new Date() }));
  }

  @Action(AddBookAction)
  add(ctx: StateContext<BooksStateModel>, action: AddBookAction) {
    const state = ctx.getState();
    ctx.setState({
      items: [...state.items, action.book]
    });
  }

  @Action(GetBooksAction)
  getBooks(ctx: StateContext<BooksStateModel>) {
    // return this.api.getPeople(2)
    return this.api.getPeoples()
      .pipe(
        tap((response: any) => {
          response.results.map((item: any) => {
            ctx.dispatch(
              new AddBookAction({
                title: item.name,
                pageCount: item.height,
                publicationDate: new Date(1977, 0, 31)
              })
            )
          })
        })
      );

        // map(
        //   (data: any) => {
        //      return data.results.map((item: any) => {
        //         return {
        //           title: item.name,
        //           pageCount: item.height,
        //           publicationDate: new Date(1977, 0, 31)
        //         };
        //     });
        //   }
        // ),
        // tap(
        //   (books: any) => {
        //     const state = ctx.getState();
        //     ctx.setState({
        //       items: [...state.items, books]
        //     });
        //   }
        // )

}

}

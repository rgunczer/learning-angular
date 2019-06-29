import { Component } from '@angular/core';
import { Observable } from 'rxjs';

// store
import { Select, Store } from '@ngxs/store';
import { SimpleStateModel, SimpleState } from './store/simple.state';
import { ModifySimpleState } from './store/simple.actions';
import { BooksStateModel, BooksState, Book } from './store/books.state';
import { AddBookAction, GetBooksAction } from './store/book.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'complexStateApp';
  name = 'joel';
  feed = true;

  @Select(SimpleState) simple$: Observable<SimpleStateModel>;
  // books$: Observable<Book>;
  // @Select(state => state.books.items) books$: Observable<BooksStateModel>;
  @Select(BooksState.getBooks) books$: Observable<BooksStateModel>;

  constructor(private store: Store) {
    // this.books$ = this.store.select(state => state.books.items);
  }

  modify() {
    this.store.dispatch(new ModifySimpleState(this.name, this.feed));
  }

  addNewBook() {
    this.store.dispatch(
      new AddBookAction(
        { title: 'test', pageCount: 99, publicationDate: new Date() }
      )
    );
  }

  getBooks() {
    this.store.dispatch(
      new GetBooksAction()
    );
  }

}

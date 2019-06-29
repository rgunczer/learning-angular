import { Book } from './books.state';

export class AddBookAction {
  static readonly type = '[Book] Add Book';
  constructor(public book: Book) {}
}

export class GetBooksAction {
  static readonly type = '[Book] Get Books';
}

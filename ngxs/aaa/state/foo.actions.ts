export class FooAction {
  static readonly type = '[Foo] Add item';
  constructor(public payload: string) { }
}

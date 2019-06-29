export class ModifySimpleState {
  static readonly type = '[SimpleState] Modify';
  constructor(public name: string, public feed: boolean) {
  }
}

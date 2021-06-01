import { Observable, Subject } from "rxjs";

export class BaseDialog {

  protected onClose: Subject<any>;
  protected winbox: any;
  params: any;

  constructor() {
    this.onClose = new Subject();
  }

  setWinBox(winbox: any): void {
    this.winbox = winbox;
  }

  closeAndSendResult(result?: any): void {
    this.onClose.next((typeof result === 'undefined' || result === null) ? null : result);
    this.onClose.complete();

    this.winbox.close();
  }

  getOnClose$(): Observable<any> {
    return this.onClose.asObservable();
  }

}

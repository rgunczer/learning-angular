import { ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseDialog } from './base-dialog';
import { DialogOptions } from './dialog-options';
import { MessageBoxComponent } from './message-box/message-box.component';

declare const WinBox: any;

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {

  }

  messageBox(
    type: 'ok' | 'yesno',
    title: string,
    message: string
  ): Observable<any> {

    const data: { message: string, actions: {id: string, text: string}[] } = {
      message,
      actions:[]
    };

    switch (type) {
      case 'ok':
        data.actions.push({ id: 'ok', text: 'OK' });
        break;

      case 'yesno':
        data.actions.push({ id: 'no', text: 'NO' });
        data.actions.push({ id: 'yes', text: 'YES' });
        break;
    }

    return this.openDialog(
      MessageBoxComponent,
      {
        title,
        modal: true,
        data
      }
    );
  }


  openDialog(component: any, options: DialogOptions): Observable<any> {
    console.log('DialogService -> Open Dialog');

    const componentRef = this.resolver
      .resolveComponentFactory(component)
      .create(this.injector);

    const dialog: BaseDialog = (componentRef.instance as BaseDialog);
    dialog.params = { ...options.data, title: options.title };

    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

    const that = this;

    const winbox = new WinBox({

      title: options.title,
      mount: domElem,

      modal: options.modal,

      onclose: function(force: boolean) {
        that.appRef.detachView(componentRef.hostView);
        componentRef.destroy();

        return false;
      }

    });


    dialog.setWinBox(winbox);

    return dialog.getOnClose$();

  }

}

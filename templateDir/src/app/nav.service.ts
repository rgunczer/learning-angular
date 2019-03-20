import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  state = new BehaviorSubject<TemplateRef<any>|null>(null);

  constructor() { }

  setTemplate(tpl: TemplateRef<any>) {
    console.log('NavService::setTemplate', tpl);
    this.state.next(tpl);
  }

}

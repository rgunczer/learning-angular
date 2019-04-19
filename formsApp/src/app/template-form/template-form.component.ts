import { Component, OnInit, Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

export function passwordMatcher(c: AbstractControl) {
  if (!c.get('password') || !c.get('confirm')) {
    return null;
  }
  return c.get('password').value === c.get('confirm').value
    ? null : { 'nomatch': true };
}

@Directive({
  selector: '[password-matcher]',
  providers: [
    {
      provide: NG_VALIDATORS,
      multi: true,
      useValue: passwordMatcher
    }
  ]
})
export class PasswordMatcher {

}

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html'
})
export class TemplateFormComponent implements OnInit {

  name = {
    first: 'nancy',
    last: 'drew'
  };

  constructor() { }

  ngOnInit() {
  }

  setDefaults() {
    this.name = {
      first: 'NANCY',
      last: 'DRAW'
    };
  }

}

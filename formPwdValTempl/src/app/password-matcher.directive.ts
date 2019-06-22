import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

export function passwordMatcher(c: AbstractControl) {
  if (!c.get('pwd') || !c.get('pwd2nd')) {
    return null;
  }
  return c.get('pwd').value === c.get('pwd2nd').value
    ? null : { nomatch: true };
}

@Directive({
  selector: '[appPasswordMatcher]',
  providers: [
    {
      provide: NG_VALIDATORS,
      multi: true,
      useValue: passwordMatcher
    }
  ]
})
export class PasswordMatcherDirective {

  constructor() { }

}

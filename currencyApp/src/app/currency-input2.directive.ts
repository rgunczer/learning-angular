import { Directive, OnInit, ElementRef, Injector } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appCurrencyInput2]'
})
export class CurrencyInput2Directive implements OnInit {

  private control: NgControl;

  constructor(
    private elementRef: ElementRef,
    private injector: Injector
  ) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'orange';
    this.elementRef.nativeElement.style.textAlign = 'right';

    this.control = this.injector.get(NgControl);

    if (!this.control || !this.control.valueAccessor) {
      console.log('oops, no control or valueAccessor');
      return;
    }

    const originalWriteVal = this.control.valueAccessor.writeValue.bind(this.control.valueAccessor);
    this.control.valueAccessor.writeValue = (val: any) => originalWriteVal(this._maskValue(val));

    const originalChange = (<any>this.control.valueAccessor)['onChange'].bind(this.control.valueAccessor);
    this.control.valueAccessor.registerOnChange((val: any) => originalChange(this._unmaskValue(val)));

    this._setVal(this._maskValue(this.control.value));
  }

  private _maskValue(val: string): string {
    return val + '$';
  }

  private _unmaskValue(val: string): string {
    let unmasked = '';
    if (val) {
      const lastChar = val.slice(-1);
      if (lastChar === '$') {
        unmasked = val.substr(0, val.length - 1);
      }
    }
    return unmasked;
  }

  private _setVal(val: string) {
    if (this.control.control) {
      this.control.control.setValue(val, { emitEvent: false });
    }
  }

}

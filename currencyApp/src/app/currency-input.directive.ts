import { Directive, ElementRef, OnInit, Renderer2, forwardRef,  HostListener, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgModel } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

// export const CURRENCYINPUT_VALUE_ACCESSOR: any = {
//   provide: NG_VALUE_ACCESSOR,
//   useExisting: forwardRef(() => CurrencyInputDirective),
//   multi: true
// };

const DecimalSymbol = '.';

@Directive({
  selector: '[appCurrencyInput]',
  providers: [
    NgModel,
    // CURRENCYINPUT_VALUE_ACCESSOR
  ]
})
export class CurrencyInputDirective implements OnInit {

  onChange: Function;
  private currencyPipe: CurrencyPipe;

  constructor(
    private elementRef: ElementRef,
    private ngModel: NgModel,
    private renderer: Renderer2
  ) {
    this.currencyPipe = new CurrencyPipe('en');
  }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    this.elementRef.nativeElement.style.textAlign = 'right';

    this.ngModel.valueChanges.subscribe(
      (value) => {
        console.log('valueChanges-subs: ' + value);

        if (value) {
          const regex = new RegExp('[^0-9\\' + DecimalSymbol + ']', 'g');
          const transformedInput = value.replace(regex, '');
          if (transformedInput !== value) {
            this.ngModel.control.patchValue(transformedInput);
          }
        }
      }
    );
  }

  @HostListener('blur', ['$event.target.value'])
  onBlur() {
    console.log('blur');

    if (!this.ngModel.model) {
      return;
    }

    if (this.ngModel.model === '') {
        this.ngModel.model = 0;
    }
    this.elementRef.nativeElement.value = this.currencyPipe.transform(this.ngModel.model);
  }

  @HostListener('focus', ['$event.target.value'])
  onFocus() {
      // console.log('focus ');

      if (!this.ngModel.model) {
        return;
      }

      if (parseInt(this.ngModel.model, 10) === 0) {
          this.ngModel.model = '';
      }
      this.elementRef.nativeElement.value = this.ngModel.model;
  }

}

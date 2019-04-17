import { Directive, Renderer2, ElementRef, HostListener, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[caseTo]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CaseToDirective,
      multi: true
    }
  ]
})
export class CaseToDirective implements ControlValueAccessor {

  @Input('caseTo') case: 'upper' | 'lower';

  private lastValue = '';
  onTouched = () => { }
  onChange = (x: any) => { }

  constructor(private renderer: Renderer2, private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'yellow';

    if (!this.case) {
      console.warn('CaseToDirective::no case specified');
    }
  }

  @HostListener('input', ['$event.target.value']) handleInput(value: any): void {
    let newVal = this.convert(value);
    if (newVal != value || this.lastValue != newVal) {
      this.lastValue = newVal;
      this.renderer.setProperty(this.element.nativeElement, 'value', newVal);
      this.onChange(newVal); // update model too!
    }
  }

  @HostListener('blur') handleBlur(): void {
    this.onTouched();
  }

  private convert(value: string): string {

    let newValue;
    switch (this.case) {
      case 'upper':
        newValue = value.toUpperCase();
        break;

      case 'lower':
        newValue = value.toLowerCase();
        break;

      default:
        newValue = value;
        break;
    }
    return newValue;
  }

  writeValue(value: any) { // model -> view
    const normalizedValue = value == null ? '' : this.convert(value);
    this.renderer.setProperty(this.element.nativeElement, 'value', normalizedValue);
    this.onChange(normalizedValue);
  }

  registerOnChange(fn: (value: any) => any): void { // view -> model
    this.onChange = fn
  }

  registerOnTouched(fn: () => any): void {
    this.onTouched = fn
  }

}
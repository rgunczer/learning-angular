import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  // selector: '[appColorizer]',
  selector: 'p[colored]', // tslint:disable-line
  exportAs: 'myCol'
})
export class ColorizerDirective {
  private _color = 'yellow'; // tslint:disable-line

  @Input() set color(value) {
    this._color = value;
    this.setColor();
  }

  constructor(private elementRef: ElementRef) {
    this.setColor();
  }

  private setColor() {
    this.elementRef.nativeElement.style.backgroundColor = this._color;
  }

}

import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCardHover]'
})
export class CardHoverDirective {
  @HostBinding('class.card-outline-primary') private isHovering: boolean;

  constructor(private element: ElementRef, private renderer: Renderer2) {
    console.log('ctor');
    // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'yellow');
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log('mouse enter');
    this.isHovering = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('mouse leave');
    this.isHovering = false;
  }

}

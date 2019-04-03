import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

interface CarouselContext {
  $implicit: string;
  controller: {
    prev: () => void;
    next: () => void;
  };
}

@Directive({
  selector: '[carousel]' // tslint:disable-line
})
export class CarouselDirective implements OnInit {
  context: CarouselContext | null = null;
  index = 0;
  @Input('carouselFrom') images: any[]; // tslint:disable-line

  constructor(
    private templateRef: TemplateRef<CarouselContext>,
    private viewContainerRef: ViewContainerRef
  ) {
  }

  ngOnInit() {
    this.context = {
      $implicit: this.images[0],
      controller: {
        prev: () => this.prev(),
        next: () => this.next()
      }
    };

    this.viewContainerRef.createEmbeddedView(this.templateRef, this.context);
  }

  next() {
    this.index++;
    if (this.index >= this.images.length) {
      this.index = 0;
    }
    this.context.$implicit = this.images[this.index];
  }

  prev() {
    this.index--;
    if (this.index < 0) {
      this.index = this.images.length - 1;
    }
    this.context.$implicit = this.images[this.index];
  }

}

import { Directive, Input, TemplateRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { DynCompComponent } from './dyn-comp/dyn-comp.component';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);

      const factory = this.componentFactoryResolver.resolveComponentFactory(DynCompComponent);
      this.compRef = this.viewContainerRef.createComponent(factory);

      setTimeout(() => {
        console.log('set title ');
        (this.compRef.instance as DynCompComponent).title = 'Joel';
      }, 1000);

      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainerRef.clear();
      this.hasView = false;
    }
  }

  private compRef = null;
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }

}

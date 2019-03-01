import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';

@Injectable({
    providedIn: 'root'
})
export class DynService {
    comps: any[] = [];
    container: any;

    constructor(
        private resolver: ComponentFactoryResolver
    ) {
    }

    setContainer(container: any) {
        this.container = container;
    }

    create(type: string, text: string, age: number) {
        switch (type) {
            case 'one':
                this.createOne(text);
                break;

            case 'two':
                this.createTwo(age);
                break;
        }
    }

    createOne(text: string) {
        const factory = this.resolver.resolveComponentFactory(CompOneComponent);
        const compRef = this.container.createComponent(factory);
        (<CompOneComponent>compRef.instance).text = text;
        this.comps.push(compRef);
    }

    createTwo(age: number) {
        const factory = this.resolver.resolveComponentFactory(CompTwoComponent);
        const compRef = this.container.createComponent(factory);
        (<CompTwoComponent>compRef.instance).age = age;
        this.comps.push(compRef);
    }

    destroy() {
        if (this.comps.length > 0) {
            const compRef = this.comps.splice(-1, 1)[0];
            compRef.destroy();
        }
    }

}

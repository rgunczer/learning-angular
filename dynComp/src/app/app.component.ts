import { Component, ViewChild, ComponentFactoryResolver, ViewContainerRef, OnInit, TemplateRef } from '@angular/core';
import { CompOneComponent } from './comp-one/comp-one.component';
import { DynService } from './dyn.service';
import { of, from } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    title = 'dynComp';
    text = '';
    comps: any[] = [];

    @ViewChild('container', { read: ViewContainerRef }) container;

    constructor(
        private dyn: DynService,
        private resolver: ComponentFactoryResolver) {
    }

    ngOnInit() {
        this.dyn.setContainer(this.container);
        from([1, 2, 3, 4, 5, 6]).subscribe(num => console.log('got: ', num));
    }

    loadOne() {
        console.log('loadOne');
        // const factory = this.resolver.resolveComponentFactory(CompOneComponent);
        // const compRef = this.container.createComponent(factory);
        // (<CompOneComponent>compRef.instance).text = 'Jancsi';
        // this.comps.push(compRef);
        this.dyn.create('one', this.text, 132);
    }

    loadTwo() {
        console.log('loadTwo');
        this.dyn.create('two', '', Math.random());
    }

    closeLast() {
        // if (this.comps.length > 0) {
        //   const compRef = this.comps.splice(-1, 1)[0];
        //   compRef.destroy();
        // }
        this.dyn.destroy();
    }

}

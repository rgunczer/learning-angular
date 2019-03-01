import { Component, OnInit, Input } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
    selector: 'app-comp-one',
    templateUrl: './comp-one.component.html'
})
export class CompOneComponent implements OnInit {

    @Input() text: string;

    id: any;

    constructor() {
        this.id = uuid();
    }

    ngOnInit() {
        console.log('CompOneComponent::ngOnInit', this.id);
    }

    click() {
        alert('click: ' + this.text);
    }

}

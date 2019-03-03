import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-comp-two',
    templateUrl: './comp-two.component.html'
})
export class CompTwoComponent implements OnInit {

    age = 0;

    constructor() { }

    ngOnInit() {
    }

    destroy() {
        console.log('destroy me: ', this.age);
    }

}

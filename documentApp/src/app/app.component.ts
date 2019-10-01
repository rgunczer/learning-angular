import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'documentApp';

  constructor(@Inject(DOCUMENT) private document: Document) {

  }

  ngOnInit() {
    // debugger;
    // const node = this.document.createElement('P');
    // const textNode = this.document.createTextNode('Water');
    // node.appendChild(textNode);

    // this.document.body.appendChild(node);
    this.document.getElementById('root').innerHTML = '<p>Apple</p>';
  }

}

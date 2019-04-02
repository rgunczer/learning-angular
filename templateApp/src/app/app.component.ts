import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ColorizerDirective } from './colorizer.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  @ViewChild('simple') simpleTemplateRef: TemplateRef<any>;
  @ViewChild('complex') complexTemplateRef: TemplateRef<any>;
  @ViewChild('dir') colorizerDir: ColorizerDirective;

  title = 'templateApp';
  currentTemplate: TemplateRef<any>;

  viewMode = 'card';
  items = [
    {
      header: 'Head 1',
      content: 'some text one'
    },
    {
      header: 'Head 2',
      content: 'some text two'
    },
    {
      header: 'Head 3',
      content: 'some text three'
    }
  ];

  setTemplate(templateRef: TemplateRef<any>) {
    this.currentTemplate = templateRef;
  }

  cycleTemplate() {
    switch (this.currentTemplate) {
      case this.simpleTemplateRef:
        this.currentTemplate = this.complexTemplateRef;
        break;

      case this.complexTemplateRef:
        this.currentTemplate = this.simpleTemplateRef;
        break;

      default:
        this.currentTemplate = this.simpleTemplateRef;
    }
  }

  changeColor() {
    this.colorizerDir.color = 'magenta';
  }

}

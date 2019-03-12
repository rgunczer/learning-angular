import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'injectParentApp1';

  filters = [
    {
      id: 1,
      name: 'one'
    },
    {
      id: 2,
      name: 'two'
    },
    {
      id: 3,
      name: 'three'
    }
  ];

  constructor() {
  }

  addFilterOne() {
    this.filters.push({id: 1, name:'onee'});
  }

  addFilterTwo() {
    this.filters.push({id: 2, name:'twoo'});
  }

  addFilterThree() {
    this.filters.push({id: 3, name:'threee'});
  }

  removeOne() {
    const index = this.filters.findIndex(x => x.id === 1);

    if (index !== -1) {
      this.filters.splice(index, 1);
    }
  }

  onTalkBack(obj: any) {
    console.log('onTalkBack ' + obj.msg);
  }

}

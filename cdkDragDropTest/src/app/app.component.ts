import { Component } from '@angular/core';
import { moveItemInArray, CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'cdkDragDropTest';

  todo = [
    'Write outline',
    'Make slides',
    'Script demo',
    'Practice',
    'Practice more',
    'Do the Walking'
  ];

  done = [
    'shopping'
  ];

  // simple move in same array
  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.todo, event.previousIndex, event.currentIndex);
  // }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}

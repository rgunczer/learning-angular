import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  @Input() todo: Todo;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    changeDetectorRef.detach();
    // setInterval(() => {
    //   this.changeDetectorRef.detectChanges();
    // }, 2000);
  }

  ngOnInit() {
  }

  detectChanges() {
    this.changeDetectorRef.detectChanges();
  }

  changeFromInside() {
    this.todo.description = 'changed from inside';
  }

  complete() {
    this.todo.completed = true;
  }
}

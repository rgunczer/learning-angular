import { Component, OnInit, ApplicationRef, ViewChildren, QueryList } from '@angular/core';
import { Todo } from '../todo-list/todo.model';

import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html'
})
export class DummyComponent implements OnInit {

  @ViewChildren(TodoListComponent) todoLists: QueryList<TodoListComponent>;

  todos: Todo[] = [];

  constructor(private appRef: ApplicationRef) {
    console.log('appRef:components: ', appRef.components);
   }

  ngOnInit() {
    this.todos.push(new Todo(1, 'desc 1', false));
    this.todos.push(new Todo(2, 'desc 2', false));
    this.todos.push(new Todo(3, 'desc 3', false));
  }

  redraw() {
    this.appRef.tick();
  }

  changeOneTodosProperty() {
    this.todos[0].description = 'jancsi';
  }

  changeOneTodosPropertyWorks() {
    this.todos[0] = new Todo(this.todos[0].id, 'modified', this.todos[0].completed);
  }

  trigger() {

  }

  countTodos() {
    console.log(this.todoLists.length);
  }

  triggerChangeDetection() {
    this.todoLists.forEach((todoInstance: TodoListComponent) => {
      console.log(todoInstance);
      todoInstance.detectChanges();
    });
  }

}

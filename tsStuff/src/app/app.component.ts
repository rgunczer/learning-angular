import { Component, OnInit } from '@angular/core';
import { Person } from './person.model';

interface MsgboxTypes {
  error: string;
  ok: string;
  yesno: string;
  yesnocancel: string;
  continueanyway: string;
  gunsnroses: string
}

interface Todo {
  id: number;
  text: string;
  due: Date;
  age: number;
}

enum Colors {
  Red = 'r',
  Green = 'g',
  Blue = 'b'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'tsStuff';
  boss: Person;

  ngOnInit() {

    type TodoKeys = keyof Todo; // "id" | "text" | "due"

    let key: TodoKeys = 'age';

    function get<O extends object, K extends keyof O>(o: O, k: K): O[K] {
      return o[k];
    }

    function extractPropValue<T, K extends keyof T>(obj: T, key: K) {
      return obj[key];
    }

    this.boss = new Person(1, 'aaa');


    const cc = get(this.boss, 'id');

    const propValue = extractPropValue(this.boss, 'name');
    console.log(propValue);

    this.messageBox('ok', 'apple is here');
    this.messageBox('gunsnroses', 'hello');

    this.foo('jancsi');
    this.foo(2);
    this.foo(() => { console.log('jebote') })
  }

  private foo(value: unknown) {
    console.log(value);

    if (typeof value === 'string') {
      console.log(value.length);
    }

    if (typeof value === 'number') {
      console.log(value * 2);
    }

    if (typeof value === 'function') {
      value();
    }
  }


  messageBox(
    type: keyof MsgboxTypes, // 'error' | 'ok' | 'yesno' | 'yesnocancel' | 'continueanyway',
    title: string
  ) {
    console.log(type + ' ' + title);
  }

}

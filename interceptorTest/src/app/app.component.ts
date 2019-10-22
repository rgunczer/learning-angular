import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'interceptorTest';

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    this.http.get(url)
    .subscribe(data => {
      console.log('data in component: ', data);
    });
  }
}

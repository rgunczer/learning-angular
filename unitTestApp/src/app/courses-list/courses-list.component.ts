import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  courses = [
    {
      id: 1,
      name: 'one'
    },
    {
      id: 2,
      name: 'two'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

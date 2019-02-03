import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class NestedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

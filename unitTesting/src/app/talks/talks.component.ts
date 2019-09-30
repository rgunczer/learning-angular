import { Component, OnInit, Input } from '@angular/core';
import { Talk } from '../talk';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.css']
})
export class TalksComponent implements OnInit {

  @Input() talks: Talk[];

  constructor() { }

  ngOnInit() {
  }

}

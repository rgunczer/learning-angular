import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit, DoCheck {

  @ViewChild('frm') frm: NgForm;

  currencyPipe: CurrencyPipe;
  data = 'data';
  price: number;
  testPrice: number;

  constructor() { }

  ngOnInit() {
    this.currencyPipe = new CurrencyPipe('en');
  }

  ngDoCheck() {
    // console.log('SimpleForm::ngDoCheck...');
  }

  submit() {
    console.log(this.frm);
  }

  formatter(value) {
    console.log('formatter: ' + value);
    // value = value.toUpperCase();
    let newValue = value;
    if (!isNaN(value)) {
      newValue = this.currencyPipe.transform(value);
    }
    return newValue;
  }

  parser(value: any) {
    console.log('parser: ' + value);
    this.data = value.toLowerCase();
  }
}

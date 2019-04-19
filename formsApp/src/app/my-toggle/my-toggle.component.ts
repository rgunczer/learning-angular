import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-my-toggle',
  templateUrl: './my-toggle.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: MyToggleComponent
    }
  ]
})
export class MyToggleComponent implements OnInit, ControlValueAccessor {

  isOn: boolean;
  onChange: (value: any) => void;

  constructor() { }

  ngOnInit() {
  }

  toggle(isOn: boolean) {
    this.isOn = isOn;
    this.onChange(this.isOn);
  }

  writeValue(value: any) { // model -> view
    this.isOn = !!value;
  }

  registerOnChange(fn: (value: any) => void) { // view -> model
    this.onChange = fn;
  }

  registerOnTouched() {

  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

function passwordMatcher(c: AbstractControl) {
  return c.get('password').value === c.get('confirm').value
    ? null : { 'nomatch': true };
}


@Component({
  selector: 'app-a',
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent implements OnInit {

  // form = new FormGroup({
  //   first: new FormControl(),
  //   last: new FormControl(),
  //   username: new FormControl(),
  //   password: new FormControl(),
  //   confirm: new FormControl(),
  //   newsletter: new FormControl()
  // });

  myForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.myForm = this.fb.group({
      first: '',
      last: '',
      account: this.fb.group({
        username: '',
        password: ['', Validators.required],
        confirm: ['', Validators.required],
      }, { validator: passwordMatcher }),
      newsletter: ''
    });
  }

  ngOnInit() {
  }

  setDefaults() {
    // this.form.setValue({ // user friendly error if one field is missing
    //   first: 'nancy',
    //   last: 'drew',
    //   username: '',
    //   password: '',
    //   confirm: '',
    //   newsletter: ''
    // });
    this.myForm.patchValue({
      first: 'nancy',
      last: 'DRAW'
    });
  }

}

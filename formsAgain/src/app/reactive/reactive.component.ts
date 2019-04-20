import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html'
})
export class ReactiveComponent implements OnInit {

  regForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.regForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      userPassword: ['', Validators.required],
      newsletter: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.regForm.value);
  }

  onReset() {
    this.regForm.reset({
      userName: 'default',
      userPassword: 'someone@somewhere.com',
      newsletter: ''
    });
  }

}

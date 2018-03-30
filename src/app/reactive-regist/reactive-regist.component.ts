import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {equalValidator, mobileAnycValidator, mobileValidator} from '../validators/validators';

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {

  // registForm: FormGroup = new FormGroup({
  //   username: new FormControl(),
  //   mobile: new FormControl(),
  //   passwordsGroup: new FormGroup({
  //     password: new FormControl(),
  //     confirmPassword: new FormControl()
  //   })
  // });

  registForm: FormGroup;


  constructor(fb: FormBuilder) {
    this.registForm = fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      mobile: ['', mobileValidator, mobileAnycValidator],
      passwordsGroup: fb.group({
        password: ['', Validators.minLength(6)],
        confirmPassword: ['']
      }, {validator: equalValidator})
    });
  }

  ngOnInit() {
  }

  submit() {
    if (this.registForm.valid) {
      console.log('通过');
      console.log(this.registForm.value);
    } else {
      console.error(this.registForm.errors);
    }
  }


}

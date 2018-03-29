import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';

export function mobileValidator(control: FormControl): any {
  var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  let valid = myreg.test(control.value);
  console.log('手机号校验结果是:' + valid);
  return valid ? null : {mobile: true};
}

export function mobileAnycValidator(control: FormControl): any {
  var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  let valid = myreg.test(control.value);
  console.log('手机号异步校验结果是:' + valid);
  return Observable.of(valid ? null : {mobile: true}).delay(5000);
}

export function equalValidator(group: FormGroup): any {
  let password: FormControl = group.get('password').value;
  let confirmPassword: FormControl = group.get('confirmPassword').value;
  let valid: boolean = (password === confirmPassword);
  console.log('密码校验结果是:' + valid);
  return valid ? null : {equal: {descxxx: '两次密码不一致'}};
}



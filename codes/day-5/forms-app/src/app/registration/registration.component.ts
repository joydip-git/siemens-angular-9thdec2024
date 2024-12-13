import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { validatePassword } from '../validators/password-validators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  // userName = new FormControl('enter user name')
  // password = new FormControl('enter password')

  // regForm = new FormGroup(
  //   {
  //     userName: new FormControl('enter user name', [Validators.required, Validators.email]),
  //     password: new FormControl('enter password', Validators.required)
  //   }
  // )

  regForm: FormGroup;

  constructor(private builder: FormBuilder) {
    this.regForm = this.builder.group(
      {
        userName: ['enter user name', [Validators.required, Validators.email]],
        password: ['enter password', [Validators.required, validatePassword]]
      }
    )
  }

  get userName() {
    return this.regForm.get('userName')
  }
  get password() {
    return this.regForm.get('password')
  }
  submit() {
    // console.log(this.userName);
    // console.log(this.password);
    // console.log(this.regForm.get('userName'));
    // console.log(this.regForm.get('password'));
    console.log(this.regForm.value);
  }
}

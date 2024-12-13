import { Component } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

interface User {
  userName: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // user: User = {
  //   userName: '',
  //   password: ''
  // };

  submit(frm: NgForm) {
    // console.log(this.userName);
    // console.log(this.password);
    console.log(frm);
    // console.log(frm.controls['userName'].value);
    // console.log(frm.controls['password'].value);
    //console.log(frm.value);
    //console.log(this.user);
  }
}

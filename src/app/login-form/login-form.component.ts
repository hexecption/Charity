import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '.././data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private fb: FormBuilder, private svc: DataService,private router:Router) { }

  ngOnInit() {


    this.registerForm = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      name: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      phone: this.fb.control('', [Validators.required]),
      gender: this.fb.control('', [Validators.required]),
      address: this.fb.control('', [Validators.required])

    });
    // ,Validators.pattern("[0-9]{0-10}"
  }
  log() {
    console.log(this.registerForm.value);
  }
  sendDonor() {

    console.log(this.registerForm.value);
    this.svc.postDonor(this.registerForm.value)
      .subscribe(resp => console.log(resp));
      
      
  }

  abc() {
    this.router.navigate(['./accDonor']);
  }

  get email() {
    return this.registerForm.get('email');
  }
  get name() {
    return this.registerForm.get('name');
  }
  get username() {
    return this.registerForm.get('username');
  }
  get phone() {
    return this.registerForm.get('phone');
  }
  get gender() {
    return this.registerForm.get('gender');
  }
  get address() {
    return this.registerForm.get('address');
  }

}

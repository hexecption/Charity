import { Component, OnInit } from '@angular/core';
import { DataService } from '.././data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form-donee',
  templateUrl: './login-form-donee.component.html',
  styleUrls: ['./login-form-donee.component.scss']
})
export class LoginFormDoneeComponent implements OnInit {
  categories = ['Welfare', 'Education', 'Orphanage'];
  registerForm: FormGroup;
  constructor(private fb: FormBuilder, private svc: DataService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      name: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      phone: this.fb.control('', [Validators.required]),
      gender: this.fb.control('', [Validators.required]),
      address: this.fb.control('', [Validators.required]),
      category: this.fb.control('', [Validators.required])

    });
  }
  sendDonee() {
    console.log(this.registerForm.value);
    this.svc.postDonee(this.registerForm.value)
      .subscribe(resp => console.log(resp));

  }
  // navigateTo() {
  //   this.router.navigate['doneeAcc'];
  //router.navigate['/accDonee'];

  // }
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
  get category() {
    return this.registerForm.get('category');
  }

}

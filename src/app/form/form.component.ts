import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  categories = ['Welfare', 'Education', 'Orphanage'];
  donateForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {


    this.donateForm = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      category: this.fb.control('', [Validators.required]),
      amount: this.fb.control('', [Validators.required,Validators.min(100)])
    });

  }
  log() {
    console.log(this.donateForm.value);
  }
  get email() {
    return this.donateForm.get('email');
  }
  get amount(){
    return this.donateForm.get('amount');
  }
  get username(){
    return this.donateForm.get('username');
  }
  get category(){
    return this.donateForm.get('category');
  }
 
}
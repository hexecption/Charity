import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  // categories = ['Welfare', 'Education', 'Orphanage'];
  donateForm: FormGroup;
  constructor(private fb: FormBuilder,private svc:DataService) { }

  ngOnInit() {
    this.donateForm = this.fb.group({
      donorAcc: this.fb.control('', [Validators.required]),
      managerAcc: this.fb.control('', [Validators.required]),
      amount: this.fb.control('', [Validators.required,Validators.min(100)])
    });

  }
  log() {
    console.log(this.donateForm.value);
  }
  sendTrans(){
    console.log(this.donateForm.value);
    this.svc.postTransaction(this.donateForm.value)
    .subscribe(resp=>console.log(resp));
  }
  get donorAcc() {
    return this.donateForm.get('donorAcc');
  }
  get amount(){
    return this.donateForm.get('amount');
  }
  get managerAcc(){
    return this.donateForm.get('managerAcc');
  }
 
 
}
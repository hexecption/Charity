import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {
  donateForm1: FormGroup;
  constructor(private fb: FormBuilder, private svc: DataService){ }

  ngOnInit() {
    this.donateForm1 = this.fb.group({
      managerAcc: this.fb.control('', [Validators.required]),
      doneeAcc: this.fb.control('', [Validators.required]),
      amount: this.fb.control('', [Validators.required, Validators.min(100)]),
      token: this.fb.control(''),
      donee: this.fb.control('', Validators.required)
    });
  }
  sendTrans() {
    console.log(this.donateForm1.value);
    this.svc.postTransactionAfter(this.donateForm1.value)
      .subscribe(resp => console.log(resp),
        error => console.log(error));
  }
  get managerAcc() {
    return this.donateForm1.get('managerAcc');
  }
  get amount() {
    return this.donateForm1.get('amount');
  }
  get doneeAcc() {
    return this.donateForm1.get('doneeAcc');
  }
  get donee() {
    return this.donateForm1.get('donee');
  }
  get token() {
    return this.donateForm1.get('token');
  }

}

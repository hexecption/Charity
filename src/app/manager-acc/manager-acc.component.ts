import { Component, OnInit } from '@angular/core';
import { DataService } from '.././data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { Router } from '@angular/router';
@Component({
  selector: 'app-manager-acc',
  templateUrl: './manager-acc.component.html',
  styleUrls: ['./manager-acc.component.scss']
})
export class ManagerAccComponent implements OnInit {
  categories = ['Welfare', 'Education', 'Orphanage']; 
  managerAccForm: FormGroup;
  constructor(private fb: FormBuilder, private svc: DataService) { }
  ngOnInit() {
    this.managerAccForm = this.fb.group({
      accountId: this.fb.control('', [Validators.required]),
      balance: this.fb.control('', [Validators.required]),
      username: this.fb.control('', [Validators.required])
    });
  }
  sendManagerAcc() {
    console.log(this.managerAccForm.value);
    this.svc.postManagerAcc(this.managerAccForm.value)
      .subscribe(resp => console.log(resp));

  }

  get accountId() {
    return this.managerAccForm.get('accountId');
  }
  get balance() {
    return this.managerAccForm.get('balance');
  }
  get username() {
    return this.managerAccForm.get('username');
  }

}

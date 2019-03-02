import { Component, OnInit } from '@angular/core';
import { DataService } from '.././data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-donor-acc',
  templateUrl: './donor-acc.component.html',
  styleUrls: ['./donor-acc.component.scss']
})
export class DonorAccComponent implements OnInit {

  categories = ['Welfare', 'Education', 'Orphanage'];
  donorAccForm: FormGroup;
  constructor(private fb: FormBuilder, private svc: DataService) { }

  ngOnInit() {
    this.donorAccForm = this.fb.group({
      accountId: this.fb.control('', [Validators.required]),
      balance: this.fb.control('', [Validators.required]),
      username: this.fb.control('', [Validators.required])
    });
  }
  sendDonorAcc() {
    console.log(this.donorAccForm.value);
    this.svc.postDonorAcc(this.donorAccForm.value)
      .subscribe(resp => console.log(resp));
  }

  get accountId() {
    return this.donorAccForm.get('accountId');
  }
  get balance() {
    return this.donorAccForm.get('balance');
  }
  get username() {
    return this.donorAccForm.get('username');
  }


}

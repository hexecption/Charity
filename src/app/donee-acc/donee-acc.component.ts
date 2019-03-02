import { Component, OnInit } from '@angular/core';
import { DataService } from '.././data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-donee-acc',
  templateUrl: './donee-acc.component.html',
  styleUrls: ['./donee-acc.component.scss']
})
export class DoneeAccComponent implements OnInit {

  categories = ['Welfare', 'Education', 'Orphanage'];
  doneeAccForm: FormGroup;
  constructor(private fb: FormBuilder, private svc: DataService) { }

  ngOnInit() {
    this.doneeAccForm = this.fb.group({
      accountId: this.fb.control('', [Validators.required]),
      balance: this.fb.control('', [Validators.required]),
      username: this.fb.control('', [Validators.required])


    });
  }
  sendDoneeAcc() {
    console.log(this.doneeAccForm.value);
    this.svc.postDoneeAcc(this.doneeAccForm.value)
      .subscribe(resp => console.log(resp));
  }

  get accountId() {
    return this.doneeAccForm.get('accountId');
  }
  get balance() {
    return this.doneeAccForm.get('balance');
  }
  get username() {
    return this.doneeAccForm.get('username');
  }


}

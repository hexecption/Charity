import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
// import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  // categories = ['Welfare', 'Education', 'Orphanage'];
  donateForm: FormGroup;
  //randNum: string;
  constructor(private fb: FormBuilder, private svc: DataService) { }

  ngOnInit() {
    this.donateForm = this.fb.group({
      donorAcc: this.fb.control('', [Validators.required]),
      managerAcc: this.fb.control('', [Validators.required]),
      amount: this.fb.control('', [Validators.required, Validators.min(100)]),
      token: this.fb.control(''),
      manager: this.fb.control('', Validators.required)
    });

  }

  // public downloadPDF() {
  //   let doc = new jsPDF();

  //   let specialElementHandlers = {
  //     '#editor': function (element, renderer) {
  //       return true;
  //     }
  //   }

  //   let content = this.content.nativeElement;

  //   doc.fromHTML(content.innerHTML, 15, 15, {
  //     'width': 190,
  //     'elementhandlers': specialElementHandlers
  //   });

  //   doc.save('test.pdf');
  // }

  // randomInt(min, max) {
  //   this.randNum = Math.floor(Math.random() * (max - min + 1));
  //   console.log(this.randNum);
  // }
  sendTrans() {
    console.log(this.donateForm.value);
    this.svc.postTransaction(this.donateForm.value)
      .subscribe(resp => console.log(resp),
        error => console.log(error));
  }
  get donorAcc() {
    return this.donateForm.get('donorAcc');
  }
  get amount() {
    return this.donateForm.get('amount');
  }
  get managerAcc() {
    return this.donateForm.get('managerAcc');
  }
  get manager() {
    return this.donateForm.get('manager');
  }
  get token() {
    return this.donateForm.get('token');
  }

}
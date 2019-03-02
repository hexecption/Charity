import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Donor } from './donor.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Transaction } from './transaction.model';
import { Donee } from './donee.model';
import { DoneeAcc } from './doneeAcc.model';
import { DonorAcc } from './donorAcc.model';
// import { resource } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  d: Donor;
  t: Transaction;
  d1: Donee;
  d2: DoneeAcc;
  d3: DonorAcc;
  constructor(private _http: HttpClient) { }

  postDonor(donor: any): Observable<any> {
    return this._http.post('http://localhost:3000/api/Donor', donor)
      .pipe(map((data: Donor) => {
        console.log(data);
        this.d = data;
        console.log(this.d);
      })
      );

  }
  postDonorAcc(donorAccnt: any): Observable<any> {
    const donorAcc={
      $class: 'org.charity.Donor_Account',
      accountId: donorAccnt.accountId,
      balance: donorAccnt.balance,
      owner: 'resource:org.charity.Donor#'+donorAccnt.username

    };
    console.log(donorAcc);
    return this._http.post('http://localhost:3000/api/Donor_Account', donorAcc)
      .pipe(map((data: any) => {
        console.log(data);
        // this.d3 = data;
        // console.log(this.d3);
      })
      );

  }
  postDonee(donee: any): Observable<any> {
    
    return this._http.post('http://localhost:3000/api/Donee', donee)
      .pipe(map((data: Donee) => {
        console.log(data);
        // this.d = data;
        // console.log(this.d);
      })
      );

  }
  postDoneeAcc(doneeAccnt: any): Observable<any> {
    const doneeAcc={
      $class: "org.charity.Donee_Account",
      accountId:doneeAccnt.accountId,
      balance: doneeAccnt.balance,
      owner: 'resource:org.charity.Donee#'+doneeAccnt.username

    };
    console.log(doneeAcc);
    return this._http.post('http://localhost:3000/api/Donee_Account', doneeAcc)
      .pipe(map((data: any) => {
        console.log(data);
        // this.d2 = data;
        // console.log(this.d2);
      })
      );

  }

  postManager(manager:any):Observable<any>{
    return this._http.post('http://localhost:3000/api/Manager',manager)
    .pipe(map((data: any) => {
      console.log(data);
      // this.d = data;
      // console.log(this.d);
    })
    );
  }

  postTransaction(trans: any): Observable<any> {

    const transactionDetails = {
      $class: "org.charity.Donor_Manager",
      from: "resource:org.charity.Donor_Account#" + trans.donorAcc,
      to: "resource:org.charity.Manager_Account#" + trans.managerAcc,
      amount: trans.amount,
      token: "resource:org.charity.Token#" + trans.token,
      manager: "resource:org.charity.Manager#" + trans.manager
    };
    console.log(transactionDetails);
    return this._http.post('http://localhost:3000/api/Donor_Manager', transactionDetails)
      .pipe(map((data: any) => {
        console.log(data);
        // this.t = data;
        // console.log(this.t);
      })
      );
  }
}

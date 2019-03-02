import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Donor } from './donor.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Transaction } from './transaction.model';
import { Donee} from './donee.model';
import { DoneeAcc } from './doneeAcc.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  d: Donor;
  t: Transaction;
  d1:Donee;
  d2:DoneeAcc;
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
postDoneeAcc(doneeAccnt:any):Observable<any>{
  return this._http.post('http://localhost:3000/api/Donor', doneeAccnt)
    .pipe(map((data: DoneeAcc) => {
      console.log(data);
      this.d2 = data;
      console.log(this.d2);
    })
    );

}

  postDonee(donee: any): Observable<any> {
    return this._http.post('http://localhost:3000/api/Donee', donee)
      .pipe(map((data: Donee) => {
        console.log(data);
        this.d = data;
        console.log(this.d);
      })
      );

  }
  postTransaction(trans: any): Observable<any> {
    return this._http.post('http://localhost:3000/api/Donor_Manager', trans)
      .pipe(map((data: Transaction) => {
        console.log(data);
        this.t = data;
        console.log(this.t);
      })
      );

  }


}

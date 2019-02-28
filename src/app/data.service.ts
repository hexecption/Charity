import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Donor } from './donor.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Transaction } from './transactiom.model';
import { Donee} from './donee.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // apiUrl='http://localhost:3000/api/Donor';
  d: Donor;
  t: Transaction;
  d1:Donee;
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

  postDonee(donee: any): Observable<any> {
    return this._http.post('', donee)
      .pipe(map((data: Donee) => {
        console.log(data);
        this.d = data;
        console.log(this.d);
      })
      );

  }
  postTransaction(trans: any): Observable<any> {
    return this._http.post('', trans)
      .pipe(map((data: Transaction) => {
        console.log(data);
        this.t = data;
        console.log(this.t);
      })
      );

  }


}

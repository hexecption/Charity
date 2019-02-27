import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Donor } from './donor.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // apiUrl='http://localhost:3000/api/Donor';
  d: Donor;
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

}

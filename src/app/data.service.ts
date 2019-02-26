import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl="";
  constructor(private _http: HttpClient) { }

  // postDonor(donor: any) {
  //   return this._http.post('apiUrl', user)
  //     .map(res => res.json());

  // }

}

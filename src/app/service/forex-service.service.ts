import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ForexServiceService {
  constructor(private http: HttpClient) {}

 // BASE_URL: String = 'https://api.exchangeratesapi.io/latest?base';
  PROXY: String = 'https://cors-anywhere.herokuapp.com/';
  BASE_URL : String = 'https://hmvxoxpbz1.execute-api.ap-southeast-2.amazonaws.com/dev/api/forex';

  BASE: String = "PHP";

  getForexData() {
    return this.http.get(`${this.PROXY}${this.BASE_URL}`);
  }
}

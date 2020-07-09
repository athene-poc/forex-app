import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ForexServiceService {
  constructor(private http: HttpClient) {}

  BASE_URL: String = 'https://api.exchangeratesapi.io/latest?base';

  BASE: String = "PHP";

  getForexData() {
    return this.http.get(`${this.BASE_URL}${this.BASE}`);
  }
}

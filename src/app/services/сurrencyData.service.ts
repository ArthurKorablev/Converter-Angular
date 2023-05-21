import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurrency } from '../currency';

@Injectable({
  providedIn: 'root',
})
export class CurrencyDataService {
  constructor(private http: HttpClient) {}

  getCurrencyData() {
    return this.http.get<ICurrency[]>(
      'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
    );
  }
}

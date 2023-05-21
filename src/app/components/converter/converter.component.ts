import { Component, OnInit, Input } from '@angular/core';
import { ICurrency } from 'src/app/currency';
import { CurrencyDataService } from 'src/app/services/сurrencyData.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
})
export class ConverterComponent implements OnInit {
  @Input() currency: ICurrency;

  currencies: ICurrency[] = [];

  country_1 = '';
  country_2 = '';
  resault = '';
  amount = '';

  setCountryOne(c1: string) {
    this.country_1 = c1;
  }

  setCoutryTwo(c2: string) {
    this.country_2 = c2;
  }

  setAmount(a: string) {
    this.amount = a;
  }

  constructor(private currencyDataService: CurrencyDataService) {}

  ngOnInit(): void {
    this.currencyDataService.getCurrencyData().subscribe((currencies) => {
      currencies.forEach((currency) => {
        if (currency.cc == 'USD' || currency.cc == 'EUR') {
          this.currencies.push(currency);
        }
      });
    });
  }

  convert() {
    let rate_1 = 1;
    let rate_2 = 1;
    let res = 0;

    this.currencies.forEach((item) => {
      if (item.cc == this.country_1) {
        rate_1 = item.rate;
      }
    });

    this.currencies.forEach((item) => {
      if (item.cc == this.country_2) {
        rate_2 = item.rate;
      }
    });

    res = (rate_1 / rate_2) * Number(this.amount);

    this.resault = String(res.toFixed(2));
  }
}

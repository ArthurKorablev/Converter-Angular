import { Component, OnInit } from '@angular/core';
import { ICurrency } from 'src/app/currency';
import { CurrencyDataService } from 'src/app/services/сurrencyData.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  title = 'current exchange rate';

  currencies: ICurrency[] = [];

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
}

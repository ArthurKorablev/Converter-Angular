import { Component, Input } from '@angular/core';
import { ICurrency } from 'src/app/currency';

@Component({
  selector: 'app-rateCard',
  templateUrl: './rateCard.component.html',
})
export class RateCardComponent {
  @Input() currency: ICurrency;
}

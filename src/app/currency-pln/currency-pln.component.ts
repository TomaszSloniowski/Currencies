import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-currency-pln',
  templateUrl: './currency-pln.component.html',
  styleUrls: ['./currency-pln.component.css']
})

export class CurrencyPlnComponent  {

  @Input() ticker: any;
  @Input() currency: string;

  constructor() {}

  }

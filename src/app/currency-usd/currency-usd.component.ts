import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-currency-usd',
  templateUrl: './currency-usd.component.html',
  styleUrls: ['./currency-usd.component.css']
})
export class CurrencyUsdComponent implements OnInit {

  @Input() ticker: any;
  @Input() currency: string;

  public usd = 3;

  constructor() { }

  ngOnInit(): void {
    this.ticker = (this.ticker / this.usd).toFixed(1)
  }
}

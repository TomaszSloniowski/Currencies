import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-currency-usd',
  templateUrl: './currency-usd.component.html',
  styleUrls: ['./currency-usd.component.css']
})
export class CurrencyUsdComponent implements OnInit {

  public Usd = 3;
  public tickerBtcUsd: any;

  constructor(
    private route: ActivatedRoute) {}

    ngOnInit(): void {
      this.tickerBtcUsd = this.route.snapshot.data.btcusd;
      console.log('BTC/USD: ', this.tickerBtcUsd)
  }
}

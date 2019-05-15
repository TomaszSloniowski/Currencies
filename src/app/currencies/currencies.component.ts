import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-currencies',
  template: `
  <div class="currencies-container">
  <app-currency-pln ticker={{tickerBtcPln.average}} currency="BTC/PLN" class="currency-btc-value"></app-currency-pln>
  <app-currency-usd ticker={{tickerBtcUsd.average}} currency="BTC/USD" class="currency-usd"></app-currency-usd>
  <app-currency-pln ticker={{tickerLskPln.average}} currency="LSK/PLN" class="currency-lsk-eth-value"></app-currency-pln>
  <app-currency-usd ticker={{tickerLskUsd.average}} currency="LSK/USD" class="currency-usd-lsk-eth-value"></app-currency-usd>
  <app-currency-pln ticker={{tickerEthPln.average}} currency="ETH/PLN" class="currency-lsk-eth-value"></app-currency-pln>
  <app-currency-usd ticker={{tickerEthUsd.average}} currency="ETH/USD" class="currency-usd-lsk-eth-value"></app-currency-usd>
  </div>
  `,
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  public tickerBtcPln: any;
  public tickerLskPln: any;
  public tickerEthPln: any;
  public tickerBtcUsd: any;
  public tickerLskUsd: any;
  public tickerEthUsd: any;

  public currency: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.tickerBtcPln = this.route.snapshot.data.btc;
    this.tickerLskPln = this.route.snapshot.data.lsk;
    this.tickerEthPln = this.route.snapshot.data.eth;
    this.tickerBtcUsd = this.route.snapshot.data.btcusd;
    this.tickerLskUsd = this.route.snapshot.data.lskusd;
    this.tickerEthUsd = this.route.snapshot.data.ethusd;

    }

}

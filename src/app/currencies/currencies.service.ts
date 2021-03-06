import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  constructor(private http: HttpClient) { }

  getCurrencyBtcPln() {
    return this.http.get('https://bitbay.net/API/Public/BTCPLN/ticker.json')
  }

  getCurrencyLskPln() {
    return this.http.get('https://bitbay.net/API/Public/LSKPLN/ticker.json')
  }

  getCurrencyEthPln() {
    return this.http.get('https://bitbay.net/API/Public/ETHPLN/ticker.json')
  }

  getCurrencyBtcUsd() {
    return this.http.get('https://bitbay.net/API/Public/BTCUSD/ticker.json');
  }

  getCurrencyLskUsd() {
    return this.http.get('https://bitbay.net/API/Public/LSKUSD/ticker.json');
  }

  getCurrencyEthUsd() {
    return this.http.get('https://bitbay.net/API/Public/ETHUSD/ticker.json');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Angular':  'test'
   })
};


@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  constructor(private http: HttpClient) { }

  getCurrencyBtcPln() {
    return this.http.get('https://bitbay.net/API/Public/BTCPLN/ticker.json', httpOptions)
  }

  getCurrencyLskPln() {
    return this.http.get('https://bitbay.net/API/Public/LSKPLN/ticker.json', httpOptions)
  }

  getCurrencyEthPln() {
    return this.http.get('https://bitbay.net/API/Public/ETHPLN/ticker.json', httpOptions)
  }

  getCurrencyBtcUsd() {
    return this.http.get('https://bitbay.net/API/Public/BTCUSD/ticker.json', httpOptions);
  }

}

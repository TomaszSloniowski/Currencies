import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  constructor(private http: HttpClient) { }

  getCurrencyPln() {
    return this.http.get('https://bitbay.net/API/Public/BTCPLN/ticker.json')
   }

  getCurrencyUsd() {
    return this.http.get('https://bitbay.net/API/Public/BTCUSD/ticker.json')
  }
}

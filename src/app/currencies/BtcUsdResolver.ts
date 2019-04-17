import { Injectable } from '@angular/core';
import { CurrenciesService } from './currencies.service';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class BtcUsdResolver implements Resolve<any> {
  constructor(private apiService: CurrenciesService) { }

  resolve(): Observable<any> {
    return this.apiService.getCurrencyBtcUsd();
    }

}
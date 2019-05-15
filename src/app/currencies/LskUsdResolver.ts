import { Injectable } from '@angular/core';
import { CurrenciesService } from './currencies.service';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class LskUsdResolver implements Resolve<any> {
  constructor(private apiService: CurrenciesService) { }

  resolve(): Observable<any> {
    return this.apiService.getCurrencyLskUsd();
    }

}
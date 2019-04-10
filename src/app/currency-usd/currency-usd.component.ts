import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from '../currencies/currencies.service';
import { Observable } from 'rxjs';
import { Ticker } from '../currencies/ticker';


@Component({
  selector: 'app-currency-usd',
  templateUrl: './currency-usd.component.html',
  styleUrls: ['./currency-usd.component.css']
})
export class CurrencyUsdComponent {

private ticker : Ticker[] = [];

  constructor(private service: CurrenciesService) {

      this.service.getCurrencyUsd().subscribe((res : any[])=>{
        this.ticker = res;
        console.log (this.ticker);
      });
     }
}

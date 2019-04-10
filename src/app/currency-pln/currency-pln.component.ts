import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from '../currencies/currencies.service'
import { Observable } from 'rxjs';
import { Ticker } from '../currencies/ticker';

@Component({
  selector: 'app-currency-pln',
  templateUrl: './currency-pln.component.html',
  styleUrls: ['./currency-pln.component.css']
})

export class CurrencyPlnComponent {

  private ticker : Ticker[] = [];
 // private BtcPlnObservable : Observable<any> ;

  constructor(private service: CurrenciesService) {

  //  this.BtcPlnObservable = this.service.getCurrencyPln();

    this.service.getCurrencyPln().subscribe((res : any[])=>{
      this.ticker = res;
      console.log (this.ticker);
    });
   }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-currency-pln',
  templateUrl: './currency-pln.component.html',
  styleUrls: ['./currency-pln.component.css']
})

export class CurrencyPlnComponent implements OnInit {

  public tickerBtcPln: any;
  public tickerLskPln: any;
  public tickerEthPln: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.tickerBtcPln = this.route.snapshot.data.btc;
    this.tickerLskPln = this.route.snapshot.data.lsk;
    this.tickerEthPln = this.route.snapshot.data.eth;
    }
  }

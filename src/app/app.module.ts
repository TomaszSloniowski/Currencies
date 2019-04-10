import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FeaturesComponent } from './features/features.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { Page404Component } from './page404/page404.component';
import { CurrencyPlnComponent } from './currency-pln/currency-pln.component';
import { CurrencyUsdComponent } from './currency-usd/currency-usd.component';

import { NgxWebstorageModule } from 'ngx-webstorage';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FeaturesComponent,
    CurrenciesComponent,
    Page404Component,
    CurrencyPlnComponent,
    CurrencyUsdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

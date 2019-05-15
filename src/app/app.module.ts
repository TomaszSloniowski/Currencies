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

import { AuthGuardService } from './login/auth-guard.service';
import { AuthService } from './login/auth.service';
import { CurrenciesService } from './currencies/currencies.service';
import { BtcResolver } from './currencies/BtcResolver';
import { LskResolver } from './currencies/LskResolver';
import { EthResolver } from './currencies/EthResolver';
import { BtcUsdResolver } from './currencies/BtcUsdResolver';
import { LskUsdResolver } from './currencies/LskUsdResolver';
import { EthUsdResolver } from './currencies/EthUsdResolver';

import { AngularWebStorageModule } from 'angular-web-storage';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { interceptor } from './currencies/interceptor';

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
    AngularWebStorageModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    CurrenciesService,
    BtcResolver,
    LskResolver,
    EthResolver,
    BtcUsdResolver,
    LskUsdResolver,
    EthUsdResolver,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: interceptor,
      multi: true
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

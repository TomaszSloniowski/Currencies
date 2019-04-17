import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { FeaturesComponent } from './features/features.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { Page404Component } from './page404/page404.component';
import { AuthGuardService } from './login/auth-guard.service'
import { BtcResolver } from './currencies/BtcResolver';
import { LskResolver } from './currencies/LskResolver';
import { EthResolver } from './currencies/EthResolver';
import { BtcUsdResolver } from './currencies/BtcUsdResolver';

const routes: Routes = [
  { path: 'features', canActivate: [ AuthGuardService ], component: FeaturesComponent },
  { path: '', redirectTo: 'features', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'currencies', component: CurrenciesComponent, resolve: {
    btc: BtcResolver,
    lsk: LskResolver,
    eth: EthResolver,
    btcusd: BtcUsdResolver
  }},
  { path: '404', component: Page404Component, data: {message: 'User not found!'} },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

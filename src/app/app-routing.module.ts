import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { FeaturesComponent } from './features/features.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { CurrencyPlnComponent } from './currency-pln/currency-pln.component';
import { CurrencyUsdComponent } from './currency-usd/currency-usd.component';
import { Page404Component } from './page404/page404.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'currencies', component: CurrenciesComponent},
  { path: 'page404', component: Page404Component, data: {message: 'User not found!'} },
  /*{ path: '**', redirectTo: 'page404' }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

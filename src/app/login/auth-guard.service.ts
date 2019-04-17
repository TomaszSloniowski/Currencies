import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
//import { AuthService } from './auth.service';
import { SessionStorageService } from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    //private authService: AuthService,
    private router: Router,
    private session: SessionStorageService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.session.get('userEmail')) {
      if (this.session.get('userPassword')) {
      // logged in so return true
      return true;
  }
}

  // not logged in so redirect to login page with the return url
  this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
  return false;
}
  }




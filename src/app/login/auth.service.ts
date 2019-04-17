import { Injectable } from '@angular/core';
import { User } from './user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private redirectUrl: string = '/';
	private loginUrl: string = '/login';
	private isloggedIn: boolean = false;

	isUserLoggedIn(): boolean {
		return this.isloggedIn;
	}
	getRedirectUrl(): string {
		return this.redirectUrl;
	}
	setRedirectUrl(url: string): void {
		this.redirectUrl = url;
	}
	getLoginUrl(): string {
		return this.loginUrl;
	}

  constructor() { }
}

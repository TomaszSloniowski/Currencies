import { Component } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { User } from './user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  model = new User ('','');

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor(
    private session: SessionStorageService,
    private router: Router,
     ) { }

  submit() {
    this.model = new User (this.model.email, this.model.password)
    this.session.set('userEmail', this.model.email);
    this.session.set('userPassword', this.model.password);
    console.log('logged user email: ', this.model.email);
    console.log('logged user password: ', this.model.password);
    this.router.navigate (['features'])
  }
}

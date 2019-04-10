import { Component, OnInit } from '@angular/core';
import { SessionStorage } from 'ngx-webstorage';
import { SessionStorageService } from 'ngx-webstorage';
import { user } from './user';
import { Router } from '@angular/router';


import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @SessionStorage()
  public userEmail;

  email;

  model = new user ('','');

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor(
    private service: LoginService,
    private storage: SessionStorageService,
    private router: Router
     ) { }

  ngOnInit() {
    this.storage.observe('email')
            .subscribe((value) => console.log('email', value));
  }

  login() {
    this.model = new user (this.model.email, this.model.password)
    this.storage.store('userEmail', this.model.email);
    this.storage.store('userPassword', this.model.password);
    console.log('user: ', this.model);
    console.log('storage user email: ', this.userEmail);
    this.router.navigate (['features'])

  }

}

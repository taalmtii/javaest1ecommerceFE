import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;

  constructor(private service: LoginService, private router: Router) { }

  ngOnInit(): void {
    
  }

  login(){
    this.service.login(this.username, this.password);
  }

}

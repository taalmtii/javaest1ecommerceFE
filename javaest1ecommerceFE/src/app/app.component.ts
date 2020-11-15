import { Component, OnInit } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  auth = false;

  constructor(private loginService: LoginService){}

  ngOnInit(): void {
    this.loginService.loggedIn.subscribe(() => this.auth = true)
  }
  title = 'JavaEst1 Ecommerce';

  logout(){
    this.loginService.auth = null;
    this.auth = false;
  }
}

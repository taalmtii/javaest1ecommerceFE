import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { }

  @Output() loggedIn = new EventEmitter<any>();

  auth = null;

  login(username, password) {
    this.http.post("http://localhost:8080/validatelogin", {}, this.createHeader(username, password))
    .subscribe(data => {
      if(data == true){
        this.auth = btoa(username + ":" + password)
        this.router.navigate([""]);
        this.loggedIn.emit(true);
      }
    })
  }

  getHeader() {
    return {
      headers: new HttpHeaders(
        {
          "Authorization": "Basic " + this.auth,
          "Access-Control-Allow-Origin": "*"
        }
      )
    }
  }

  createHeader(user, pass) {
    return {
      headers: new HttpHeaders(
        {
          "Authorization": "Basic " + btoa(user + ":" + pass),
          "Access-Control-Allow-Origin": "*"
        }
      )
    }
  }
}

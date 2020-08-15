import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private http: HttpClient) { }

  login(user: string, password: string): any {
    console.log('in login authentication');
    console.log(user + '  ' + password);
    return this.http.get("http://localhost:3000/user");
  }

}

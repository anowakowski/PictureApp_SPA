import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.apiUrl;
  jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient) { }

  register(model: any) {
    return this.http.post(this.baseUrl + 'auth/' + 'register/', model);
  }

  loggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  login(model: any) {
    return this.http.post(this.baseUrl + 'auth/' + 'login/', model)
      .pipe(
        map((response: any) => {
          const user = response;
          if (user) {
            localStorage.setItem('token', user.token);
            this.decodedToken = this.jwtHelper.decodeToken(user.token);
            console.log(this.decodedToken);
          }
        })
      );
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }
  user: User;
  baseUrl = environment.apiUrl;


  getUser(id: number): Observable<User> {
    return this.httpClient.get<User>(this.baseUrl + 'users/' + id);
  }

  getUnFollowedUsers(): Observable<User[]> {
    const url: string = this.baseUrl + 'users/' + this.authService.decodedToken.nameid + '/followers' + '/allUserWithFollowerInfo';
    return this.httpClient.get<User[]>(url);
  }
}

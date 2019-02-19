import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }
  user: User;
  baseUrl = environment.apiUrl;

  getBaseUserInfo(): Promise<User> {
    const userId = this.authService.decodedToken.nameid;
    return this.httpClient.get<User>(this.baseUrl + 'users/' + userId).toPromise().then(response => response as User);
  }

  getUser(): Observable<User> {
    const userId = this.authService.decodedToken.nameid;
    return this.httpClient.get<User>(this.baseUrl + 'users/' + userId);
  }

  getAllUsersWithFollowers(): Observable<User[]> {
    const url: string = this.baseUrl + 'users/allUserWithFollowerInfo';
    const userObs = this.httpClient.get<User[]>(url);
    return userObs;
  }

  setFollower(id: number) {
    const url: string = this.baseUrl + 'users/' + this.authService.decodedToken.nameid + '/followers/' + id + '/setfollow';
    return this.httpClient.post(url, {});
  }

  setUnFollowUser(id: number) {
    const url: string = this.baseUrl + 'users/' + this.authService.decodedToken.nameid + '/followers/' + id + '/setunfollow';
    return this.httpClient.post(url, {});
  }
}

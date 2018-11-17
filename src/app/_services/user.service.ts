import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  user: User;
  baseUrl = environment.apiUrl;

  getUser(id: number) {
    return this.httpClient.get<User>(this.baseUrl + 'users/' + id);
  }


}

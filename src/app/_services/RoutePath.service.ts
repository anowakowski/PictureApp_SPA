import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class RoutePathService {

  basePath = '/discover';

  constructor(private router: Router) { }

  getBasicPath(): string {
    return this.basePath;
  }

  redirectToBasePath(): Promise<boolean> {
    return this.router.navigate([this.basePath]);
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutePathService {

  basePath = '/explore';

  constructor(private router: Router) { }

  getBasicPath(): string {
    return this.basePath;
  }

  redirectToBasePath(): Promise<boolean> {
    return this.router.navigate([this.basePath]);
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { RoutePathService } from '../_services/RoutePath.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model: any = {};
  loggedIn = false;

  constructor(private authService: AuthService, private router: Router, private routePathService: RoutePathService) { }

  ngOnInit() {
    this.loggedIn = this.authService.loggedIn();

    if (this.loggedIn) {
      this.routePathService.redirectToBasePath();
    }
  }

  currentLoggedIn(loggedIntoApplication: boolean): void {
    this.loggedIn = loggedIntoApplication;
  }
}

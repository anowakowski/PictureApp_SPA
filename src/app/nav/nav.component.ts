import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model: any = {};
  loggedIn = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loggedIn = this.authService.loggedIn();
  }

  currentLoggedIn(loggedIntoApplication: boolean): void {
    this.loggedIn = loggedIntoApplication;
  }
}

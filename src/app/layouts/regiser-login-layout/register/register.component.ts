import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  template: `
  <div class="main-color-register">
    <app-nav></app-nav>
    <app-home-section-registerform></app-home-section-registerform>
    <app-explore-section></app-explore-section>
    <app-create-share-section></app-create-share-section>
    <app-footer-section></app-footer-section>
  </div>
  `,
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.authService.loggedIn()) {
      this.router.navigate(['/photo-exp']);
    }
  }
}

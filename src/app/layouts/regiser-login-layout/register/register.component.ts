import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-register',
  template: `
  <div class="main-color-register">
  <ngx-spinner
  bdColor = "rgb(255,254,254)"
  size = "large"
  color = "#c77158"
  type = "ball-atom"
  ></ngx-spinner>
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

  constructor(private authService: AuthService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit() {

    if (this.authService.loggedIn()) {
      this.spinner.show();
      this.router.navigate(['/photo-exp']);
    }
  }
}

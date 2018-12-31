import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="body">
    <app-nav></app-nav>
    <div class="container"><router-outlet></router-outlet></div>
  </div>
  <ngx-spinner
  bdColor = "rgba(51, 51, 51, 0.8)"
  size = "large"
  color = "#c77158"
  type = "ball-atom"
  ></ngx-spinner>
`,
  styleUrls: ['./register-login.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

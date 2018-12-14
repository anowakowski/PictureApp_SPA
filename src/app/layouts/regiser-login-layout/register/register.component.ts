import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}

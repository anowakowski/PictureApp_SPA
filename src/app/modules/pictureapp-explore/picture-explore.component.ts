import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture-explore-layout',
  template: `
  <app-sidenav></app-sidenav>
  <ngx-spinner
  bdColor = "rgb(255,254,254)"
  size = "large"
  color = "#c77158"
  type = "ball-atom"></ngx-spinner>
  `})
export class PictureExploreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

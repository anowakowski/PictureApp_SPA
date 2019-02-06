import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture-explore-layout',
  template: `
  <ngx-spinner
  bdColor = "rgb(255,254,254)"
  size = "large"
  color = "#c77158"
  type = "ball-atom"
  ></ngx-spinner>
<app-sidenav></app-sidenav>
  `})
export class PictureExploreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

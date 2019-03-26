import { Component, OnInit } from '@angular/core';


const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  private mediaMatcher: MediaQueryList =
  matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  ngOnInit() {
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }


}

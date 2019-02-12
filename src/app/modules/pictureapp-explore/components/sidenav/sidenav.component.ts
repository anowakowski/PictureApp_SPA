import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material';
import { Router } from '@angular/router';

const SMALL_WIDTH_BREAKPOINT = 720;
const CURRENT_BTN_COLOR = 'warn';
const BASIC_BTN_COLOR = 'primary';
const DASHBOARD_SECTION = 'dashboard';
const USERPROFILE_SECCTION = 'editUserProfile';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList =
    matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  constructor(public router: Router) { }

  public currentRouteSecction: string;
  public currentChosenSection: string;

  public currentColor = CURRENT_BTN_COLOR;
  public basicColor = BASIC_BTN_COLOR;
  public dashboardSection = DASHBOARD_SECTION;
  public userprofileSection = USERPROFILE_SECCTION;

  public dashboardColor = CURRENT_BTN_COLOR;
  public userProfileColor = BASIC_BTN_COLOR;

  @ViewChild(MatDrawer) drawer: MatDrawer;

  ngOnInit() {
    this.currentChosenSection = DASHBOARD_SECTION;
    this.currentRouteSecction = this.router.url;
    this.setCurrentSectionByRoute();
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

  setBtnColor(sectionNameToCurrent: string) {
    if (sectionNameToCurrent === this.currentChosenSection) {
      return;
    }
    this.setCurrentColor(sectionNameToCurrent);
    this.setBasicColor();

    this.currentChosenSection = sectionNameToCurrent;
  }

  private setBasicColor() {
    if (this.currentChosenSection === DASHBOARD_SECTION) {
      this.dashboardColor = BASIC_BTN_COLOR;
    } else if (this.currentChosenSection === USERPROFILE_SECCTION) {
      this.userProfileColor = BASIC_BTN_COLOR;
    }
  }

  private setCurrentColor(sectionNameToCurrent: string) {
    if (sectionNameToCurrent === DASHBOARD_SECTION) {
      this.dashboardColor = CURRENT_BTN_COLOR;
    } else if (sectionNameToCurrent === USERPROFILE_SECCTION) {
      this.userProfileColor = CURRENT_BTN_COLOR;
    }
  }

  private setCurrentSectionByRoute() {
    if (this.currentRouteSecction.search(USERPROFILE_SECCTION) === 1) {
      this.setBtnColor(USERPROFILE_SECCTION);
      return;
    }
    this.setBtnColor(DASHBOARD_SECTION);
  }
}

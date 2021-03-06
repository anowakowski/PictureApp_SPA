import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() editSectionUser = new EventEmitter<void>();
  @Output() dashbordSection = new EventEmitter<void>();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  emitMenu() {
    this.toggleSidenav.emit();
  }

  logout() {
    this.authService.logout();
  }

  emitEditUserProfileAsCurrentSection() {
    this.editSectionUser.emit();
  }

  emitDashboardAsCurrentSection() {
    this.dashbordSection.emit();
  }
}

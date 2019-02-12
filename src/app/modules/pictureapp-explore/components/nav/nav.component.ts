import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  emitMenu() {
    this.toggleSidenav.emit();
  }

  logout() {
    this.authService.logout();
  }

}
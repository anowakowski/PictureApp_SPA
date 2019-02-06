import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  emitMenu() {
    this.toggleSidenav.emit();
  }

}

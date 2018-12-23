import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginDialogComponent } from 'src/app/components/login-dialog/login-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-section',
  templateUrl: './explore-section.component.html',
  styleUrls: ['./explore-section.component.scss']
})
export class ExploreSectionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDialoginPage(): void {
    this.router.navigate(['/login']);
  }

}

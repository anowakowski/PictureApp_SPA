import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginDialogComponent } from 'src/app/components/login-dialog/login-dialog.component';

@Component({
  selector: 'app-explore-section',
  templateUrl: './explore-section.component.html',
  styleUrls: ['./explore-section.component.scss']
})
export class ExploreSectionComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

}

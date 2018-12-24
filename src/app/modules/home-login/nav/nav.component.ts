import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SearchPicturesDialogComponent } from '../search-pictures-dialog/search-pictures-dialog.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  openSearchDialog(): void {
    const dialogRef = this.dialog.open(SearchPicturesDialogComponent, {
      width: '450px',
      height: '115px',
      position: {top: '100px'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

}

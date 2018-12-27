import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SearchPicturesDialogComponent } from '../search-pictures-dialog/search-pictures-dialog.component';
import { DialogService } from '../../../services/dialog.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private dialog: MatDialog, private dialogService: DialogService) { }

  ngOnInit() {
  }
  openSearchDialog(): void {
    this.dialogService.openDialog(SearchPicturesDialogComponent, null, '150px', {top: '100px'});
  }
}

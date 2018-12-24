import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-search-pictures-dialog',
  templateUrl: './search-pictures-dialog.component.html',
  styleUrls: ['./search-pictures-dialog.component.scss']
})
export class SearchPicturesDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<SearchPicturesDialogComponent>, ) { }

  ngOnInit() {
  }

}

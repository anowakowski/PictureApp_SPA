import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-photo-detail-dialog',
  templateUrl: './photoDetail-dialog.component.html',
  styleUrls: ['./photoDetail-dialog.component.scss']
})
export class PhotoDetailDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<PhotoDetailDialogComponent>) { }

  ngOnInit() {
  }

  dismiss() {
    this.dialogRef.close(null);
  }

}

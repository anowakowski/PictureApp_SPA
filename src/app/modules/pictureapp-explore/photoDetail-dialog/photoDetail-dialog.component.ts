import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from 'src/app/models/user';

export interface DialogData {
  user: User;
}

@Component({
  selector: 'app-photo-detail-dialog',
  templateUrl: './photoDetail-dialog.component.html',
  styleUrls: ['./photoDetail-dialog.component.scss']
})
export class PhotoDetailDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<PhotoDetailDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    console.log(this.data);
  }

  dismiss() {
    this.dialogRef.close(null);
  }

}

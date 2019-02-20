import { Component, OnInit, Inject } from '@angular/core';
import { PhotoDetailDialogComponent } from '../../../photoDetail-dialog/photoDetail-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Photo } from 'src/app/models/photo';

export interface DialogData {
  photo: Photo;
}

@Component({
  selector: 'app-edit-userprofile-confirmation-dialog',
  templateUrl: './edit-userprofile-confirmation-dialog.component.html',
  styleUrls: ['./edit-userprofile-confirmation-dialog.component.scss']
})
export class EditUserprofileConfirmationDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<PhotoDetailDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

}

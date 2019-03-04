import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Photo } from 'src/app/models/photo';
import { PhotoDetailDialogComponent } from '../../../photo-explore/components/photoDetail-dialog/photoDetail-dialog.component';

export interface DialogData {
  photo: Photo;
}

@Component({
  selector: 'app-edit-userprofile-confirmation-dialog',
  templateUrl: './edit-userprofile-confirmation-dialog.component.html',
  styleUrls: ['./edit-userprofile-confirmation-dialog.component.scss']
})
export class EditUserprofileConfirmationDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<EditUserprofileConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

}

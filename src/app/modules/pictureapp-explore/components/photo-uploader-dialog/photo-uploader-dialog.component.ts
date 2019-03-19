import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  file: File;
}

@Component({
  selector: 'app-photo-uploader-dialog',
  templateUrl: './photo-uploader-dialog.component.html',
  styleUrls: ['./photo-uploader-dialog.component.scss']
})
export class PhotoUploaderDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<PhotoUploaderDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    const photoUploader = this.data.file;
  }

}

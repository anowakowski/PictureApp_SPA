import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';

export interface DialogData {
  file: File;
}

@Component({
  selector: 'app-photo-uploader-dialog',
  templateUrl: './photo-uploader-dialog.component.html',
  styleUrls: ['./photo-uploader-dialog.component.scss']
})
export class PhotoUploaderDialogComponent implements OnInit {

  currentFile: File;

  constructor(private dialogRef: MatDialogRef<PhotoUploaderDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.currentFile = this.data.file;
  }
}

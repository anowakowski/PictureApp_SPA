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

  public uploader: FileUploader;
  baseUrl = environment.apiUrl;
  currentFile: File;

  constructor(private dialogRef: MatDialogRef<PhotoUploaderDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  @Output() testOutp = new EventEmitter<string>();

  ngOnInit() {
    this.initUploader();
    this.currentFile = this.data.file;
    this.setCurrentPhotoForUploader();
  }

  initUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl,
      authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['image'],
      disableMultipart: true,
      });
  }

  getFileUploader() {
    return this.uploader;
  }

  setCurrentPhotoForUploader() {
    this.uploader.addToQueue(this.getCurrentFiles());
    this.testOutp.emit('test');
  }

  private getCurrentFiles() {

    const files = new Array();
    files.push(this.currentFile);

    return files;
  }
}

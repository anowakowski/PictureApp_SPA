import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-photo-uploader-content-dialog',
  templateUrl: './photo-uploader-content-dialog.component.html',
  styleUrls: ['./photo-uploader-content-dialog.component.scss']
})
export class PhotoUploaderContentDialogComponent implements OnInit {

  public uploader: FileUploader;
  public hasBaseDropZoneOver = false;

  constructor() { }

  ngOnInit() {
    this.initUploader();
  }


  onChangePreviewImages() {

  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  initUploader() {
    this.uploader = new FileUploader({
      isHTML5: true,
      allowedFileType: ['image'],
      disableMultipart: true,
      autoUpload: false,
      removeAfterUpload: false
    });
  }


}

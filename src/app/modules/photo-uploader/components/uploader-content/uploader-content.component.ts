import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-uploader-content',
  templateUrl: './uploader-content.component.html',
  styleUrls: ['./uploader-content.component.scss']
})
export class UploaderContentComponent implements OnInit {

  public uploader: FileUploader;
  baseUrl = environment.apiUrl;

  public hasBaseDropZoneOver = false;

  constructor() { }

  ngOnInit() {
    this.initUploader();
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

  onChangePreviewImages() {

  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }


}

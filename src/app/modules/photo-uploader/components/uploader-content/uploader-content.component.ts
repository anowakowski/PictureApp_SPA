import { Component, OnInit, EventEmitter } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-uploader-content',
  templateUrl: './uploader-content.component.html',
  styleUrls: ['./uploader-content.component.scss']
})
export class UploaderContentComponent implements OnInit {

  public uploader: FileUploader;
  public filePreviewPaths: SafeUrl[];
  public filePreviewPath: SafeUrl;
  baseUrl = environment.apiUrl;
  uploadPhotoForm: FormGroup;

  public hasBaseDropZoneOver = false;
  public photoHasDroped = false;

  constructor(private sanitizer: DomSanitizer, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.filePreviewPaths = new Array<SafeUrl>();
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
    this.photoHasDroped = true;
    this.filePreviewPaths = new Array<SafeUrl>();

    const fileItems = this.uploader.queue;

    fileItems.forEach(fileItem => {
      this.filePreviewPaths.push(this.getSafeUrl(fileItem._file));
    });
  }

  getpicture() {
    if (this.filePreviewPaths.length > 0) {
      return this.filePreviewPaths[0];
    }
    return '';
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }



  private getSafeUrl(file: File): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(file)));
  }



}

import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-photo-uploader-addphoto-firststep',
  templateUrl: './photo-uploader-addphoto-firststep.component.html',
  styleUrls: ['./photo-uploader-addphoto-firststep.component.scss']
})
export class PhotoUploaderAddphotoFirststepComponent implements OnInit {

  @Input() fileInput: File;

  public uploader: FileUploader;
  public filePreviewPath: SafeUrl;
  public filePreviewPaths: SafeUrl[];

  public hasBaseDropZoneOver = false;
  baseUrl = environment.apiUrl;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.initUploader();
    this.setCurrentPhotoForUploader();
    this.prepareImagePreview();
    this.filePreviewPaths = new Array<SafeUrl>();
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

  setCurrentPhotoForUploader() {
    this.uploader.addToQueue(this.getCurrentFiles());
  }

  prepareImagePreview () {
    const item = this.uploader.queue[0];
    const filePreviewPath  = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(item._file)));

    this.filePreviewPaths.push(filePreviewPath);
 }

  onChangePreviewImages() {

  }

  getImagePreview () {

  }

  onFileSelected(event: EventEmitter<File[]>) {
    const file: File = event[0];
  }

  onMultipleFilesSelected(event) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
    }
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  private getCurrentFiles() {
    const files = new Array();
    files.push(this.fileInput);

    return files;
  }
}

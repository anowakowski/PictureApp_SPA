import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { PhotoUploaderDialogComponent } from '../../photo-uploader-dialog.component';
import { PhotoUploaderModel } from 'src/app/models/photo-uploader-model';

@Component({
  selector: 'app-photo-uploader-addphoto-firststep',
  templateUrl: './photo-uploader-addphoto-firststep.component.html',
  styleUrls: ['./photo-uploader-addphoto-firststep.component.scss']
})
export class PhotoUploaderAddphotoFirststepComponent implements OnInit {

  @Input() fileInput: File;

  public uploader: FileUploader;
  public filePreviewPaths: SafeUrl[];
  public photoUploaderModel: PhotoUploaderModel;

  public hasBaseDropZoneOver = false;
  baseUrl = environment.apiUrl;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.initUploader();
    this.setCurrentPhotoForUploader();
    this.prepareImagePreviewForDropedImages();
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

  prepareImagePreviewForDropedImages () {
    this.onChangePreviewImages();
 }

  onChangePreviewImages() {
    this.filePreviewPaths = new Array<SafeUrl>();

    const fileItems = this.uploader.queue;

    fileItems.forEach(fileItem => {
      this.filePreviewPaths.push(this.getSafeUrl(fileItem._file));
    });

    this.setPhotoUploaderModel();
  }

  getSafeUrl(file: File): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(file)));
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  private getCurrentFiles() {
    const files = new Array();
    files.push(this.fileInput);

    return files;
  }

  private setPhotoUploaderModel() {
    this.photoUploaderModel = new PhotoUploaderModel();
    this.photoUploaderModel.fileUploader = this.uploader;
    this.photoUploaderModel.filePreviewPaths = this.filePreviewPaths;
  }
}

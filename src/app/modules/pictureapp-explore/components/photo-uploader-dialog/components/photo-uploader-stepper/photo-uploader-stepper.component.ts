import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { PhotoUploaderModel } from 'src/app/models/photo-uploader-model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-photo-uploader-stepper',
  templateUrl: './photo-uploader-stepper.component.html',
  styleUrls: ['./photo-uploader-stepper.component.scss']
})
export class PhotoUploaderStepperComponent implements OnInit {
  @Input() fileInput: File;

  isLinear = false;
  isOptional = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  currentFileUploader: FileUploader;
  test: string;
  public uploader: FileUploader;
  public filePreviewPaths: SafeUrl[];

  public hasBaseDropZoneOver = false;
  baseUrl = environment.apiUrl;

  constructor(private _formBuilder: FormBuilder, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [''],
      fileInput: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ''
    });

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
}

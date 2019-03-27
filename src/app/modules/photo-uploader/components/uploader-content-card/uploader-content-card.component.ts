import { Component, OnInit, Input } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PhotoUploaderModel } from 'src/app/models/photo-uploader-model';

@Component({
  selector: 'app-uploader-content-card',
  templateUrl: './uploader-content-card.component.html',
  styleUrls: ['./uploader-content-card.component.scss']
})
export class UploaderContentCardComponent implements OnInit {

  @Input() fileInput: File;
  @Input() photoUploaderModel: PhotoUploaderModel;

  public filePreviewPath: SafeUrl;
  uploadPhotoForm: FormGroup;
  isEditMode = false;

  constructor(private sanitizer: DomSanitizer, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.prepareFilePreview();
    this.createUploadPhotoForm();
    console.log(this.photoUploaderModel);
  }

  prepareFilePreview() {
    this.filePreviewPath = this.getSafeUrl(this.fileInput);
  }

  createUploadPhotoForm() {
    this.uploadPhotoForm = this.formBuilder.group({
      photoTitle: [this.fileInput.name, [Validators.required]],
      photoSubtitle: ['', Validators.required],
      photoDescription: ['', Validators.nullValidator]
    });
  }

  choosePhoto() {
    this.isEditMode = true;
  }

  private getSafeUrl(file: File): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(file)));
  }
}

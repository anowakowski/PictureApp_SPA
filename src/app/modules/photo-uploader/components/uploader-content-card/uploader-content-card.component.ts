import { Component, OnInit, Input } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PhotoUploaderModel } from 'src/app/models/photo-uploader-model';
import { UploadPhotoLocalStorageService } from '../../services/upload-photo-local-storage.service';
import { SidenavService } from '../../services/sidenav.service';

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

  constructor(
    private sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
    private localStorageService: UploadPhotoLocalStorageService,
    private sidenavService: SidenavService) { }

  ngOnInit() {
    this.prepareFilePreview();
    this.createUploadPhotoForm();
    this.propagateCurrentChosedPhoto();
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
    this.photoUploaderModel.isEditMode = true;
    this.localStorageService.updatePhoto(this.photoUploaderModel); // update phote after chosed
    this.propagateCurrentChosedPhoto();
  }

  changePhotoTitle(event) {
    const changedPhotoTitle = event.currentTarget.value;
    this.photoUploaderModel.photoTitle = changedPhotoTitle;
    this.localStorageService.updatePhoto(this.photoUploaderModel);
    this.propagateCurrentChosedPhoto();
  }

  private propagateCurrentChosedPhoto() {
    this.sidenavService.emitPhotoModelUploader(this.photoUploaderModel);
  }

  private getSafeUrl(file: File): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(file)));
  }
}

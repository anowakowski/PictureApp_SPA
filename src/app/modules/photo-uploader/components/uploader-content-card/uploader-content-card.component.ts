import { Component, OnInit, Input, OnDestroy } from '@angular/core';
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
export class UploaderContentCardComponent implements OnInit, OnDestroy {

  @Input() fileInput: File;
  @Input() photoUploaderModel: PhotoUploaderModel;

  public photoUploaderModelSubscription: any;
  public photoUploaderModelChangeEditSubscription: any;

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

    this.photoUploaderModelSubscription = this.sidenavService.getPhotoModelUploaderToCardFromSidenav()
      .subscribe(photoUploaderModelFromSidenav => this.updateCurrentPhoto(photoUploaderModelFromSidenav));

    this.photoUploaderModelChangeEditSubscription = this.sidenavService.getPhotoUploaderModelChangeEditMode()
      .subscribe(() => this.refreshEditMode());
  }

  refreshEditMode() {
    const currentPhoto = this.localStorageService.getCurrentChosedPhoto();

    if (this.photoUploaderModel.index !== currentPhoto.index) {
      this.photoUploaderModel.isEditMode = false;
    } else {
      this.photoUploaderModel.isEditMode = true;
    }
  }

  ngOnDestroy() {
    this.photoUploaderModelSubscription.unsubscribe();
  }

  prepareFilePreview() {
    this.filePreviewPath = this.getSafeUrl(this.fileInput);
  }

  createUploadPhotoForm() {
    this.uploadPhotoForm = this.formBuilder.group({
      photoTitle: [this.fileInput.name],
      photoSubtitle: [''],
      photoDescription: ['']
    });
  }

  choosePhoto() {
    const currentChosedPhotoWithEditMode = this.localStorageService.getCurrentChosedPhoto();
    currentChosedPhotoWithEditMode.isEditMode = false;
    this.localStorageService.updatePhoto(currentChosedPhotoWithEditMode);

    this.photoUploaderModel.isEditMode = true;
    this.localStorageService.updatePhoto(this.photoUploaderModel); // update phote after chosed

    this.propagateCurrentChosedPhoto();
    this.sidenavService.emitPhotoUploaderModelChangeEditMode();
  }

  changePhotoTitle(event) {
    const changedPhotoTitle = event.currentTarget.value;
    this.photoUploaderModel.photoTitle = changedPhotoTitle;
    this.syncPhotoChanges();
  }

  changePhotoDescription(event) {
    this.photoUploaderModel.photoDescription = event.currentTarget.value;
    this.syncPhotoChanges();
  }

  private syncPhotoChanges() {
    this.localStorageService.updatePhoto(this.photoUploaderModel);
    this.propagateCurrentChosedPhoto();
  }

  private updateCurrentPhoto(photo: PhotoUploaderModel) {
    this.photoUploaderModel = photo;
    this.uploadPhotoForm.controls['photoTitle'].setValue(photo.photoTitle);
    this.uploadPhotoForm.controls['photoDescription'].setValue(photo.photoDescription);
  }

  private propagateCurrentChosedPhoto() {
    this.sidenavService.emitPhotoModelUploader(this.photoUploaderModel);
  }

  private getSafeUrl(file: File): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(file)));
  }
}

import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PhotoUploaderModel } from 'src/app/models/photo-uploader-model';
import { UploadPhotoLocalStorageService } from '../../services/upload-photo-local-storage.service';
import { PhotoEventService } from '../../services/photoEvent.service';
import { MatDialog } from '@angular/material';
// tslint:disable-next-line:max-line-length
import { DeleteConfirmationDialogComponent } from 'src/app/modules/photo-confirmation-panels/components/delete-confirmation-dialog/delete-confirmation-dialog.component';

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
    private photoEventService: PhotoEventService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.prepareFilePreview();
    this.createUploadPhotoForm();
    this.propagateCurrentChosedPhoto();
    this.subscireEvents();
  }

  ngOnDestroy() {
    this.photoUploaderModelSubscription.unsubscribe();
    this.photoUploaderModelChangeEditSubscription.unsubscribe();
  }

  refreshEditMode() {
    const currentPhoto = this.localStorageService.getCurrentChosedPhoto();

    if (this.photoUploaderModel.index !== currentPhoto.index) {
      this.photoUploaderModel.isEditMode = false;
    } else {
      this.photoUploaderModel.isEditMode = true;
    }
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

  openDeleteConfirmationDialog() {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      data: {photoTitle: this.photoUploaderModel.photoTitle}
    });
    dialogRef.afterClosed().subscribe(result => {});
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
    this.photoEventService.emitPhotoModelUploader(this.photoUploaderModel);
    this.photoEventService.emitPhotoUploaderModelChangeEditMode();
  }

  private subscireEvents() {
    this.photoUploaderModelSubscription = this.photoEventService.getPhotoModelUploaderToCardFromSidenav()
      .subscribe(photoUploaderModelFromSidenav => this.updateCurrentPhoto(photoUploaderModelFromSidenav));
    this.photoUploaderModelChangeEditSubscription = this.photoEventService.getPhotoUploaderModelChangeEditMode()
      .subscribe(() => this.refreshEditMode());
  }

  private getSafeUrl(file: File): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(file)));
  }
}

import { Component, OnInit, OnDestroy, AfterViewInit, AfterViewChecked } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { UploadPhotoLocalStorageService } from '../../services/upload-photo-local-storage.service';
import { PhotoUploaderModel } from 'src/app/models/photo-uploader-model';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy, AfterViewChecked  {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  public photoUploaderModelSubscription: any;
  public isUploaderPhotoSubscription: any;
  public isUploadedPhoto = false;

  isEditMode: false;
  sidenavPhotoForm: FormGroup;
  tags: Array<string>;
  currentPhoto: PhotoUploaderModel;

  constructor(
    private sidenavService: SidenavService,
    private formBuilder: FormBuilder,
    private localStorageService: UploadPhotoLocalStorageService) { }

  private mediaMatcher: MediaQueryList =
  matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  ngOnInit() {
    this.getCurrentChosedPhotoFromLocalStorage();
    this.createSidenavPhotoForm();
    this.tags = new Array<string>();
  }

  ngAfterViewChecked() {
    this.isUploaderPhotoSubscription = this.sidenavService.getPhotoUploaded()
      .subscribe(isPhotoUploader => this.photoUploaded(isPhotoUploader));
    this.photoUploaderModelSubscription = this.sidenavService.getPhotoModelUploader()
      .subscribe(photoUploaderModel => this.updateInfoAboutCurrentPhotoToUpload(photoUploaderModel));
  }

  ngOnDestroy() {
    this.isUploaderPhotoSubscription.unsubscribe();
    this.photoUploaderModelSubscription.unsubscribe();
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

  photoUploaded(isPhotoUploaded: boolean) {
    this.isUploadedPhoto = isPhotoUploaded;
  }

  updateInfoAboutCurrentPhotoToUpload(photo: PhotoUploaderModel) {
    this.sidenavPhotoForm.controls['photoTitle'].setValue(photo.photoTitle);
    this.sidenavPhotoForm.controls['photoDescription'].setValue(photo.photoDescription);
    this.currentPhoto = photo;
  }

  checkIfFieldIsValid(fieldName: string): boolean {
    return this.sidenavPhotoForm.get(fieldName).invalid;
  }

  createSidenavPhotoForm() {
    this.sidenavPhotoForm = this.formBuilder.group({
      photoTitle: [this.getPhotoTitle()],
      photoDescription: [''],
      photoTags: ['']
    });
  }

  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.tags.push(value.trim());
    }

    if (input) {
      input.value = '';
    }
  }

  removeTag(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  changePhotoTitle(event) {
    const photoTitle = event.currentTarget.value;
    this.currentPhoto.photoTitle = photoTitle;
    this.syncChanges();
  }

  changePhotoDescription(event) {
    const photoDesc = event.currentTarget.value;
    this.currentPhoto.photoDescription = photoDesc;
    this.syncChanges();
  }

  private syncChanges() {
    this.localStorageService.updatePhoto(this.currentPhoto);
    this.sidenavService.emitPhotoModelUploaderToCardFromSidenav(this.currentPhoto);
  }

  private getCurrentChosedPhotoFromLocalStorage() {
    if (this.localStorageService.isExistingPhotoPull()) {
      this.currentPhoto = this.localStorageService.getCurrentChosedPhoto();
    }
  }

  private getPhotoTitle() {
    if (this.currentPhoto != null) {
      return this.currentPhoto.photoTitle;
    }

    return null;
  }
}

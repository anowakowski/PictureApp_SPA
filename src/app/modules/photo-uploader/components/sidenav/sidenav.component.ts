import { Component, OnInit, OnDestroy, AfterViewInit, AfterViewChecked, ChangeDetectorRef} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { UploadPhotoLocalStorageService } from '../../services/upload-photo-local-storage.service';
import { PhotoUploaderModel } from 'src/app/models/photo-uploader-model';
import { PhotoEventService } from '../../services/photoEvent.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { User } from 'src/app/models/user';

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

  public mainPhotoUrl: string;

  constructor(
    private photoEventService: PhotoEventService,
    private formBuilder: FormBuilder,
    private localStorageService: UploadPhotoLocalStorageService,
    private cdr: ChangeDetectorRef,
    private localStorageGlobalService: LocalStorageService) { }

  private mediaMatcher: MediaQueryList =
  matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  ngOnInit() {
    this.getCurrentChosedPhotoFromLocalStorage();
    this.createSidenavPhotoForm();
    this.preparePhotoTags();
    this.tags = new Array<string>();
    const currentUserData: User = this.localStorageGlobalService.getItem('currentUserData');
    this.mainPhotoUrl = currentUserData.photoUrl;
  }

  ngAfterViewChecked() {
    this.isUploaderPhotoSubscription = this.photoEventService.getPhotoUploaded()
      .subscribe(isPhotoUploader => this.photoUploaded(isPhotoUploader));
    this.photoUploaderModelSubscription = this.photoEventService.getPhotoModelUploader()
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
    if (photo !== undefined && photo !== null) {
      this.sidenavPhotoForm.controls['photoTitle'].setValue(photo.photoTitle);
      this.sidenavPhotoForm.controls['photoDescription'].setValue(photo.photoDescription);
      this.currentPhoto = photo;
      this.preparePhotoTags();
    }
  }

  checkIfFieldIsValid(fieldName: string): boolean {
    return this.sidenavPhotoForm.get(fieldName).invalid;
  }

  createSidenavPhotoForm() {
    this.sidenavPhotoForm = this.formBuilder.group({
      photoTitle: [this.getPhotoTitle()],
      photoDescription: ['']
    });
  }

  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.tags.push(value.trim());
      this.updateCurrentPhotoTags();
    }

    if (input) {
      input.value = '';
    }
  }

  removeTag(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
      this.updateCurrentPhotoTags();
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
    this.updateCurrentPhotoOnLocalStorage();
    this.photoEventService.emitPhotoModelUploaderToCardFromSidenav(this.currentPhoto);
  }

  private updateCurrentPhotoOnLocalStorage() {
    this.localStorageService.updatePhoto(this.currentPhoto);
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

  private updateCurrentPhotoTags() {
    this.currentPhoto.photoTags = this.tags;
    this.updateCurrentPhotoOnLocalStorage();
  }

  private preparePhotoTags() {
    if (this.checkIfTagsFromCurrentPhotoAreNotNull() && this.currentPhoto.photoTags.length > 0 ) {
      this.tags = this.currentPhoto.photoTags;
    } else {
      this.tags = new Array<string>();
    }

    this.cdr.detectChanges();
  }

  private checkIfTagsFromCurrentPhotoAreNotNull(): boolean {
    if (this.currentPhoto === undefined || this.currentPhoto === null) {
      return false;
    }
    if (this.currentPhoto.photoTags === undefined) {
      return false;
    }
    return true;
  }
}

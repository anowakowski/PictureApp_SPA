import { Component, OnInit, OnDestroy, AfterViewInit, AfterViewChecked, ChangeDetectorRef} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { UploadPhotoLocalStorageService } from '../../services/upload-photo-local-storage.service';
import { PhotoUploaderModel } from 'src/app/models/photo-uploader-model';
import { PhotoEventService } from '../../services/photoEvent.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { User } from 'src/app/models/user';
import { FileUploader, FileItem } from 'ng2-file-upload';

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

  public shouldShowSidenav = false;

  isEditMode: false;
  sidenavPhotoForm: FormGroup;
  tags: Array<string>;
  currentPhoto: PhotoUploaderModel;

  public mainPhotoUrl: string;

  public uploader: FileUploader;
  public hasBaseDropZoneOver = false;

  constructor(
    private photoEventService: PhotoEventService,
    private formBuilder: FormBuilder,
    private localStorageService: UploadPhotoLocalStorageService,
    private cdr: ChangeDetectorRef,
    private localStorageGlobalService: LocalStorageService,
    private photoEvent: PhotoEventService) { }

  private mediaMatcher: MediaQueryList =
  matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  ngOnInit() {
    this.getCurrentChosedPhotoFromLocalStorage();
    this.createSidenavPhotoForm();
    this.preparePhotoTags();
    this.initUploader();
    this.tags = new Array<string>();
    const currentUserData: User = this.localStorageGlobalService.getItem('currentUserData');
    this.mainPhotoUrl = currentUserData.photoUrl;
  }

  onChangePreviewImages() {
    const fileItem: FileItem = this.uploader.queue[0];
    const files: Array<File> = this.prepareFilesToPropagate(fileItem);
    this.propagateNewFile(files);
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  initUploader() {
    this.uploader = new FileUploader({
      isHTML5: true,
      allowedFileType: ['image'],
      disableMultipart: true,
      autoUpload: false,
      removeAfterUpload: false
    });
  }

  ngAfterViewChecked() {
    this.subscribeEvents();
  }

  ngOnDestroy() {
    this.isUploaderPhotoSubscription.unsubscribe();
    this.photoUploaderModelSubscription.unsubscribe();
  }

  showSideNav() {
    if (!this.isScreenSmall() && this.shouldShowSidenav) {
      return true;
    } else {
      return false;
    }
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

  cancelUploadPhotos() {
    this.photoEventService.emitPhotoUploaderRemoveAllPhotos(true);
  }

  private isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

  private photoUploaded(isPhotoUploaded: boolean) {
    this.shouldShowSidenav = isPhotoUploaded;
  }

  private propagateNewFile(files: File[]): void {
    if (files !== null) {
      this.photoEventService.emitPhotoUploaderPropagateNewPhotos(files);
    }
  }

  private prepareFilesToPropagate(fileItem: FileItem): Array<File> {
    if (fileItem === null) {
      return null;
    }

    const files: Array<File> = new Array<File>();
    files.push(fileItem._file);
    return files;
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

  private subscribeEvents() {
    this.isUploaderPhotoSubscription = this.photoEventService.getPhotoUploaded()
      .subscribe(isPhotoUploader => this.photoUploaded(isPhotoUploader));
    this.photoUploaderModelSubscription = this.photoEventService.getPhotoModelUploader()
      .subscribe(photoUploaderModel => this.updateInfoAboutCurrentPhotoToUpload(photoUploaderModel));
  }
}

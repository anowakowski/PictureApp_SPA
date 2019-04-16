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
    this.currentPhoto = photo;
  }

  checkIfFieldIsValid(fieldName: string): boolean {
    return this.sidenavPhotoForm.get(fieldName).invalid;
  }

  createSidenavPhotoForm() {
    this.sidenavPhotoForm = this.formBuilder.group({
      photoTitle: [this.currentPhoto.photoTitle, [Validators.required]],
      photoDescription: ['', [Validators.required]],
      photoTags: ['']
    });
  }

  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      // this.fruits.push({name: value.trim()});
      this.tags.push(value.trim());
    }

    // Reset the input value
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

  private getCurrentChosedPhotoFromLocalStorage() {
    this.currentPhoto = this.localStorageService.getCurrentChosedPhoto();
  }
}

import { Injectable, EventEmitter } from '@angular/core';
import { PhotoUploaderModel } from 'src/app/models/photo-uploader-model';
import { Photo } from 'src/app/models/photo';


@Injectable({
  providedIn: 'root'
})
export class PhotoEventService {

  photoUploaded: EventEmitter<boolean> = new EventEmitter();
  photoUploaderModelEmiter: EventEmitter<PhotoUploaderModel> = new EventEmitter();
  photoUploaderModelToCardFromSidenavEmiter: EventEmitter<PhotoUploaderModel> = new EventEmitter();
  photoUploaderModelChangeEditModeEmiter: EventEmitter<void> = new EventEmitter();

  constructor() { }

  emitPhotoUploaded(isPhotoUploaded) {
    this.photoUploaded.emit(isPhotoUploaded);
  }

  getPhotoUploaded() {
    return this.photoUploaded;
  }

  emitPhotoModelUploader(photo: PhotoUploaderModel) {
    this.photoUploaderModelEmiter.emit(photo);
  }

  getPhotoModelUploader() {
    return this.photoUploaderModelEmiter;
  }

  emitPhotoModelUploaderToCardFromSidenav(photo: PhotoUploaderModel) {
    this.photoUploaderModelToCardFromSidenavEmiter.emit(photo);
  }

  getPhotoModelUploaderToCardFromSidenav() {
    return this.photoUploaderModelToCardFromSidenavEmiter;
  }

  emitPhotoUploaderModelChangeEditMode() {
    this.photoUploaderModelChangeEditModeEmiter.emit();
  }

  getPhotoUploaderModelChangeEditMode() {
    return this.photoUploaderModelChangeEditModeEmiter;
  }
}

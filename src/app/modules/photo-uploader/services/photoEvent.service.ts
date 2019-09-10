import { Injectable, EventEmitter } from '@angular/core';
import { PhotoUploaderModel } from 'src/app/models/photo-uploader-model';
import { Photo } from 'src/app/models/photo';
import { FileItem } from 'ng2-file-upload';

@Injectable({
  providedIn: 'root'
})
export class PhotoEventService {

  constructor() { }

  private photoUploaded: EventEmitter<boolean> = new EventEmitter();
  private photoUploaderModelEmiter: EventEmitter<PhotoUploaderModel> = new EventEmitter();
  private photoUploaderModelToCardFromSidenavEmiter: EventEmitter<PhotoUploaderModel> = new EventEmitter();
  private photoUploaderModelChangeEditModeEmiter: EventEmitter<void> = new EventEmitter();
  private photoUploaderCountOfAcctualPhotosEmiter: EventEmitter<number> = new EventEmitter();
  private photoUploaderRemoveAllPhotosEmiter: EventEmitter<boolean> = new EventEmitter();
  private photoUploaderRemoveChosenPhotoEmiter: EventEmitter<FileItem> = new EventEmitter();
  private photoUploaderPropagateNewPhotosEmiter: EventEmitter<File[]> = new EventEmitter();

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

  emitPhotoUploaderCountOfAcctualPhotos(photosCount: number) {
    this.photoUploaderCountOfAcctualPhotosEmiter.emit(photosCount);
  }

  getPhotoUploaderCountOfAcctualPhotos() {
    return this.photoUploaderCountOfAcctualPhotosEmiter;
  }

  emitPhotoUploaderRemoveAllPhotos(isCancelUpload: boolean) {
    this.photoUploaderRemoveAllPhotosEmiter.emit(isCancelUpload);
  }

  getPhotoUploaderRemoveAllPhotos() {
    return this.photoUploaderRemoveAllPhotosEmiter;
  }

  emitphotoUploaderRemoveChosenPhoto(fileItem: FileItem) {
    this.photoUploaderRemoveChosenPhotoEmiter.emit(fileItem);
  }

  getPhotoUploaderRemoveChosenPhoto() {
    return this.photoUploaderRemoveChosenPhotoEmiter;
  }

  emitPhotoUploaderPropagateNewPhotos(files: File[]) {
    this.photoUploaderPropagateNewPhotosEmiter.emit(files);
  }

  getPhotoUploaderPropagateNewPhotos() {
    return this.photoUploaderPropagateNewPhotosEmiter;
  }
}

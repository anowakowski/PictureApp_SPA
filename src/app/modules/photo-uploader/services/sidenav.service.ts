import { Injectable, EventEmitter } from '@angular/core';
import { PhotoUploaderModel } from 'src/app/models/photo-uploader-model';


@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  photoUploaded: EventEmitter<boolean> = new EventEmitter();
  photoUploaderModelEmiter: EventEmitter<PhotoUploaderModel> = new EventEmitter();

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
}

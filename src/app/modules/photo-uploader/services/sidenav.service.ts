import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  photoUploaded: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  emitPhotoUploaded(isPhotoUploaded) {
    this.photoUploaded.emit(isPhotoUploaded);
  }

  getPhotoUploaded() {
    return this.photoUploaded;
  }

}

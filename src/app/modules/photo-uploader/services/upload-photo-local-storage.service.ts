import { Injectable } from '@angular/core';
import { PhotoUploaderModel } from 'src/app/models/photo-uploader-model';

const PHOTOS_TO_UPLOAD_NAME = 'photostoUpload';

@Injectable({
  providedIn: 'root'
})
export class UploadPhotoLocalStorageService {

  constructor() { }

  setPhotosToLocalStorage(photos: PhotoUploaderModel[]) {
    this.removeItem();
    this.setItem(photos);
  }

  updatePhoto(photoUploaderModel: PhotoUploaderModel) {
    const photos: Array<PhotoUploaderModel> = this.getItem();

    const findedPhotoToRermove = photos.find(x => x.index === photoUploaderModel.index);
    this.removeFromArray(findedPhotoToRermove, photos);

    photos.push(photoUploaderModel);
    this.setItem(photos);
  }

  getCurrentChosedPhoto(): PhotoUploaderModel {
    const photos = this.getItem();
    return photos.find(x => x.isEditMode);
  }

  isExistingPhotoPull(): boolean {
    return this.isExistingItem();
  }

  private isExistingItem(): boolean {
    return this.getItem() != null ? true : false;
  }

  private getItem(): Array<PhotoUploaderModel> {
    const photos: Array<PhotoUploaderModel> = JSON.parse(localStorage.getItem(PHOTOS_TO_UPLOAD_NAME));
    return photos;
  }

  private setItem(photos: Array<PhotoUploaderModel>) {
    localStorage.setItem(PHOTOS_TO_UPLOAD_NAME, JSON.stringify(photos));
  }

  private removeItem() {
    localStorage.removeItem(PHOTOS_TO_UPLOAD_NAME);
  }

  private removeFromArray(photo: PhotoUploaderModel, photos: Array<PhotoUploaderModel>) {
    const indexPhoto: number = photos.indexOf(photo);
    photos.splice(indexPhoto, 1);
  }
}

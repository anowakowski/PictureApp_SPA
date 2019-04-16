import { Injectable } from '@angular/core';
import { PhotoUploaderModel } from 'src/app/models/photo-uploader-model';

const PHOTOS_TO_UPLOAD_NAME = 'photostoUpload';

@Injectable({
  providedIn: 'root'
})
export class UploadPhotoLocalStorageService {

  constructor() { }

  setPhotoToLocalStorage(photoUploaderModel: PhotoUploaderModel) {
    let photos: Array<PhotoUploaderModel>;

    if (this.isExistingItem()) {
      photos = this.getItem();
      photos.push(photoUploaderModel);
    } else {
      photos = new Array<PhotoUploaderModel>();
      photos.push(photoUploaderModel);
    }

    this.setItem(photos);
  }

  updatePhoto(photoUploaderModel: PhotoUploaderModel) {
    const photos: Array<PhotoUploaderModel> = this.getItem();

    const findedPhotoToRermove = photos.find(x => x.index === photoUploaderModel.index);
    this.removeFromArray(findedPhotoToRermove, photos);

    photos.push(photoUploaderModel);
    this.setItem(photos);
  }

  private isExistingItem(): boolean {
    return this.getItem() != null ? true : false;
  }

  private removeItem(key: string) {
    localStorage.removeItem(key);
  }

  private getItem(): Array<PhotoUploaderModel> {
    const photos: Array<PhotoUploaderModel> = JSON.parse(localStorage.getItem(PHOTOS_TO_UPLOAD_NAME));
    return photos;
  }

  private setItem(photos: Array<PhotoUploaderModel>) {
    localStorage.setItem(PHOTOS_TO_UPLOAD_NAME, JSON.stringify(photos));
  }

  private removeFromArray(photo: PhotoUploaderModel, photos: Array<PhotoUploaderModel>) {
    const indexPhoto = photos.indexOf(photo);
    if (indexPhoto > -1) {
      photos.splice(indexPhoto, 1);
    }
  }
}

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
    this.removeChosenPhotoFromArray(photos, photoUploaderModel);

    photos.push(photoUploaderModel);
    this.setItem(photos);
  }

  removeChosenPhoto(photoUploaderModel: PhotoUploaderModel) {
    const photos: Array<PhotoUploaderModel> = this.getItem();
    this.removeChosenPhotoFromArray(photos, photoUploaderModel);

    this.setItem(photos);
  }

  getPhotoModel(index: number): PhotoUploaderModel {
    const photos = this.getItem();
    if (photos != null) {
      return photos.find(x => x.index === index);
    }
    return null;
  }

  getAllPhotosIdsForRemoving(): string[] {
    const photoModels: Array<PhotoUploaderModel> = this.getItem();
    return photoModels.map(({id}) => id);
  }

  getPhotoIdForRemoving(index: number ): string[] {
    const photoModels: Array<PhotoUploaderModel> = this.getItem();
    const idToRemove: string = photoModels.find(x => x.index === index).id;

    const idArrayToRemove = new Array<string>();
    idArrayToRemove.push(idToRemove);

    return idArrayToRemove;
  }

  getCurrentChosedPhoto(): PhotoUploaderModel {
    const photos = this.getItem();
    return photos.find(x => x.isEditMode);
  }

  isExistingPhotoPull(): boolean {
    return this.isExistingItem();
  }

  initializePhoto() {
    if (this.isExistingItem()) {
      this.removeItem();
    }

    this.setItem(new Array<PhotoUploaderModel>());
  }

  clearStorage() {
    this.removeItem();
  }

  private removeChosenPhotoFromArray(photos: PhotoUploaderModel[], photoUploaderModel: PhotoUploaderModel) {
    const findedPhotoToRermove = photos.find(x => x.index === photoUploaderModel.index);
    this.removeFromArray(findedPhotoToRermove, photos);
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

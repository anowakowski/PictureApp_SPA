import { Component, OnInit, EventEmitter } from '@angular/core';
import { FileUploader, FileItem } from 'ng2-file-upload';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PhotoUploaderModel } from 'src/app/models/photo-uploader-model';
import { UploadPhotoLocalStorageService } from '../../services/upload-photo-local-storage.service';
import { PhotoEventService } from '../../services/photoEvent.service';
import { WarrningDialogComponent } from 'src/app/modules/photo-confirmation-panels/components/warrning-dialog/warrning-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-uploader-content',
  templateUrl: './uploader-content.component.html',
  styleUrls: ['./uploader-content.component.scss']
})
export class UploaderContentComponent implements OnInit {

  public uploader: FileUploader;
  baseUrl = environment.apiUrl;
  uploadPhotoForm: FormGroup;
  photoUploaderModels: PhotoUploaderModel[];
  public photoUploaderRemoveAllPhotosSubscription: any;

  public hasBaseDropZoneOver = false;
  public photoHasUploaded = false;

  constructor(
    private photoEventService: PhotoEventService,
    private localStorageService: UploadPhotoLocalStorageService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.photoUploaderModels = new Array<PhotoUploaderModel>();
    this.initUploader();
    this.photoUploaderRemoveAllPhotosSubscription = this.photoEventService.getPhotoUploaderRemoveAllPhotos()
      .subscribe(() => { this.removeAllPhotos(); });
  }

  initUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl,
      authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['image'],
      disableMultipart: true,
      });
  }

  onChangePreviewImages() {
    this.photoHasUploaded = true;

    this.photoEventService.emitPhotoUploaded(true);
    this.photoEventService.emitPhotoUploaderCountOfAcctualPhotos(this.uploader.queue.length);

    this.prepareIndexForPhotoUploader();
    this.preparePhotoUploaderModel();
  }

  GetPhotoUploaderModel(fileItem: FileItem): PhotoUploaderModel {
    const photoUploaderModel = this.photoUploaderModels.find(x => x.index === fileItem.index);

    return photoUploaderModel;
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  private preparePhotoUploaderModel() {
    const fileItems = this.uploader.queue;
    this.photoUploaderModels = new Array<PhotoUploaderModel>();
    let photoUploaderModel: PhotoUploaderModel;

    fileItems.forEach(fileItem => {

      photoUploaderModel = this.localStorageService.getPhotoModel(fileItem.index);

      if (photoUploaderModel === undefined || photoUploaderModel === null) {
        photoUploaderModel = this.preparePhotoModel(fileItem);
      }

      this.photoEditMode(fileItems, photoUploaderModel);
      this.photoUploaderModels.push(photoUploaderModel);
    });

    this.localStorageService.setPhotosToLocalStorage(this.photoUploaderModels);
  }

  private preparePhotoModel(fileItem: FileItem) {
    const photoUploaderModel = new PhotoUploaderModel();
    photoUploaderModel.index = fileItem.index;
    photoUploaderModel.photoTitle = fileItem.file.name;
    return photoUploaderModel;
  }

  private photoEditMode(fileItems: FileItem[], photoUploaderModel: PhotoUploaderModel) {
    if (this.isTheLastAddedFiles(fileItems, photoUploaderModel)) {
      this.checkIfAddingPhotoIsNotCurrentlyExisting(fileItems, photoUploaderModel);
      photoUploaderModel.isEditMode = true;
    } else {
      photoUploaderModel.isEditMode = false;
    }
  }

  private checkIfAddingPhotoIsNotCurrentlyExisting(fileItems: FileItem[], photoUploaderModel: PhotoUploaderModel) {

    const lastCurrentPhoto = fileItems.find(x => x.index === photoUploaderModel.index);
    const foundFiles = fileItems.filter(x => x.file.name === lastCurrentPhoto.file.name && x.file.size === lastCurrentPhoto.file.size);
    const isTheSameFilesWasUploaded = foundFiles.length >= 2;

    if (isTheSameFilesWasUploaded) {
      this.openWarrningDialog();
      this.uploader.removeFromQueue(lastCurrentPhoto);
    }
  }

  private isTheLastAddedFiles(fileItems: FileItem[], photoUploaderModel: PhotoUploaderModel) {
    return fileItems.length === photoUploaderModel.index;
  }

  private openWarrningDialog() {
    const dialogRef = this.dialog.open(WarrningDialogComponent, {
      data: {text: 'this photo has already been added'}
    });
    dialogRef.afterClosed().subscribe(isConfirmPhotoRemoveResult => {});
  }

  private prepareIndexForPhotoUploader() {
    const fileItems = this.uploader.queue;
    let index = 1;
    fileItems.forEach(fileItem => {
      fileItem.index = index;
      index++;
    });
  }

  private removeAllPhotos() {
    this.uploader.clearQueue();
    this.localStorageService.clearStorage();
    this.photoHasUploaded = false;
    this.photoEventService.emitPhotoUploaded(false);
  }
}

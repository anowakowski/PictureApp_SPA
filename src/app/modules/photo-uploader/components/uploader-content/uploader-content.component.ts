import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { FileUploader, FileItem } from 'ng2-file-upload';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PhotoUploaderModel } from 'src/app/models/photo-uploader-model';
import { UploadPhotoLocalStorageService } from '../../services/upload-photo-local-storage.service';
import { PhotoEventService } from '../../services/photoEvent.service';
import { WarrningDialogComponent } from 'src/app/modules/photo-confirmation-panels/components/warrning-dialog/warrning-dialog.component';
import { MatDialog } from '@angular/material';
import { UploadPhotoFileItemService } from '../../services/upload-photo-file-item.service';

@Component({
  selector: 'app-uploader-content',
  templateUrl: './uploader-content.component.html',
  styleUrls: ['./uploader-content.component.scss']
})
export class UploaderContentComponent implements OnInit, OnDestroy {

  public uploader: FileUploader;
  baseUrl = environment.apiUrl;
  uploadPhotoForm: FormGroup;
  photoUploaderModels: PhotoUploaderModel[];
  public photoUploaderRemoveAllPhotosSubscription: any;
  public photoUploaderRemoveChosenPhotoSubscription: any;
  public photoUploaderPropagateNewPhotosSubscription: any;

  public hasBaseDropZoneOver = false;
  public photoHasUploaded = false;

  constructor(
    private photoEventService: PhotoEventService,
    private localStorageService: UploadPhotoLocalStorageService,
    private fileItemService: UploadPhotoFileItemService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.photoUploaderModels = new Array<PhotoUploaderModel>();
    this.initUploader();
    this.subscribeEvents();
  }

  ngOnDestroy(): void {
    this.photoUploaderRemoveAllPhotosSubscription.unsubscribe();
    this.photoUploaderRemoveChosenPhotoSubscription.unsubscribe();
    this.photoUploaderPropagateNewPhotosSubscription.unsubscribe();
  }

  initUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + 'auth/' + 'addNewPhoto',
      authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['image'],
      disableMultipart: true,
      autoUpload: false,
      removeAfterUpload: false
      });

      this.uploader.onAfterAddingFile = (file) => {file.withCredentials = false; };
  }

  onChangePreviewImages() {
    this.propagateNewPhotosProcessing();
  }

  GetPhotoUploaderModel(fileItem: FileItem): PhotoUploaderModel {
    return this.fileItemService.GetPhotoUploaderModel(fileItem, this.photoUploaderModels);
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  private updateUploaderQueue(files: File[]) {
    if (files.length > 0) {
      this.uploader.addToQueue(files);
      this.propagateNewPhotosProcessing();
    }
  }

  private propagateNewPhotosProcessing() {
    this.photoHasUploaded = true;
    this.photoEventService.emitPhotoUploaded(true);
    this.photoEventService.emitPhotoUploaderCountOfAcctualPhotos(this.uploader.queue.length);
    this.fileItemService.prepareIndexForPhotoUploader(this.uploader);
    this.preparePhotoUploaderModel();
    this.saveNewPhoto();
  }

  private saveNewPhoto() {
    this.uploader.onBeforeUploadItem = (fileItem: any) => {
      fileItem.formData.push({index: 1});
    };

    this.uploader.uploadAll();
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
    this.photoEventService.emitPhotoUploaderCountOfAcctualPhotos(this.uploader.queue.length);
  }

  private preparePhotoModel(fileItem: FileItem) {
    const photoUploaderModel = new PhotoUploaderModel();
    photoUploaderModel.index = fileItem.index;
    photoUploaderModel.photoTitle = fileItem.file.name;
    return photoUploaderModel;
  }

  private photoEditMode(fileItems: FileItem[], photoUploaderModel: PhotoUploaderModel) {
    if (this.fileItemService.isTheLastAddedFiles(fileItems, photoUploaderModel)) {
      this.checkIfAddingPhotoIsNotCurrentlyExisting(fileItems, photoUploaderModel);
      photoUploaderModel.isEditMode = true;
    } else {
      photoUploaderModel.isEditMode = false;
    }
  }

  private checkIfAddingPhotoIsNotCurrentlyExisting(fileItems: FileItem[], photoUploaderModel: PhotoUploaderModel) {
    const lastCurrentPhoto = this.fileItemService.getLastCurrentPhoto(fileItems, photoUploaderModel);

    // tslint:disable-next-line:max-line-length
    if (this.fileItemService.checkIfAddingPhotoIsNotCurrentlyExistingInPhotoUploaderQueue(fileItems, photoUploaderModel, lastCurrentPhoto)) {
      this.openWarrningDialog();
      this.uploader.removeFromQueue(lastCurrentPhoto);
    }
  }

  private openWarrningDialog() {
    const dialogRef = this.dialog.open(WarrningDialogComponent, {
      data: {text: 'this photo has already been added'}
    });
    dialogRef.afterClosed().subscribe(isConfirmPhotoRemoveResult => {});
  }

  private removeAllPhotos() {
    this.uploader.clearQueue();
    this.localStorageService.clearStorage();
    this.photoHasUploaded = false;
    this.photoEventService.emitPhotoUploaded(false);
  }

  private removePhoto(fileItemToRemove: FileItem) {
    this.uploader.removeFromQueue(fileItemToRemove);
    const photoModel = this.localStorageService.getPhotoModel(fileItemToRemove.index);
    this.localStorageService.removeChosenPhoto(photoModel);

    if (this.uploader.queue.length < 1) {
      this.localStorageService.clearStorage();
      this.photoHasUploaded = false;
      this.photoEventService.emitPhotoUploaded(false);
    }
  }

  private subscribeEvents() {
    this.photoUploaderRemoveAllPhotosSubscription = this.photoEventService.getPhotoUploaderRemoveAllPhotos()
      .subscribe(() => { this.removeAllPhotos(); });
    this.photoUploaderRemoveChosenPhotoSubscription = this.photoEventService.getPhotoUploaderRemoveChosenPhoto()
      .subscribe(fileToRemove => { this.removePhoto(fileToRemove); });
    this.photoUploaderPropagateNewPhotosSubscription = this.photoEventService.getPhotoUploaderPropagateNewPhotos()
      .subscribe(files => { this.updateUploaderQueue(files); });
  }
}

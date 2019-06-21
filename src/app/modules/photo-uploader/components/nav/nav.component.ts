import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UploadPhotoLocalStorageService } from '../../services/upload-photo-local-storage.service';
import { PhotoEventService } from '../../services/photoEvent.service';
import { MatDialog } from '@angular/material';
// tslint:disable-next-line:max-line-length
import { DeleteConfirmationDialogComponent } from 'src/app/modules/photo-confirmation-panels/components/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { FileUploader, FileItem } from 'ng2-file-upload';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

  public photoUploaderModelSubscription: any;
  public photoUploaderCountOfAcctualPhotosSubscription: any;
  shoudShowUploadedBtn = false;
  photosCount: number;
  public uploader: FileUploader;

  constructor(
    private router: Router,
    private localStorageService: UploadPhotoLocalStorageService,
    private photoEventService: PhotoEventService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.subscribeEvents();
    this.initUploader();
  }

  ngOnDestroy(): void {
    this.photoUploaderModelSubscription.unsubscribe();
    this.photoUploaderCountOfAcctualPhotosSubscription.unsubscribe();
  }

  initUploader() {
    this.uploader = new FileUploader({
      isHTML5: true,
      allowedFileType: ['image'],
      disableMultipart: true,
      });
  }

  onChangePreviewImages() {
    const fileItems: FileItem[] = this.uploader.queue;

    if (fileItems.length > 0) {
      this.photoEventService.emitPhotoUploaderPropagateNewPhotos(fileItems);
      this.uploader.clearQueue();
    }
  }

  setCountOfPhotos(photosCount: number) {
    this.photosCount = photosCount;
  }

  showUploadedBtn(isPhotoUploaded: boolean) {
    this.shoudShowUploadedBtn = isPhotoUploaded;
  }

  cancelUploader() {
    this.localStorageService.clearStorage();
    this.router.navigate(['/']);
  }

  removeAllPhotos() {
    this.openDeleteConfirmationDialog();
  }

  openDeleteConfirmationDialog() {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      data: {photoTitle: 'all'}
    });
    dialogRef.afterClosed().subscribe(isConfirmPhotoRemoveResult => {
      if (isConfirmPhotoRemoveResult) {
        this.photoEventService.emitPhotoUploaderRemoveAllPhotos();
      }
    });
  }

  private subscribeEvents() {
    this.photoUploaderCountOfAcctualPhotosSubscription = this.photoEventService.getPhotoUploaderCountOfAcctualPhotos()
      .subscribe(photosCount => this.setCountOfPhotos(photosCount));
    this.photoUploaderModelSubscription = this.photoEventService.getPhotoUploaded()
      .subscribe(isPhotoUploaded => this.showUploadedBtn(isPhotoUploaded));
  }
}

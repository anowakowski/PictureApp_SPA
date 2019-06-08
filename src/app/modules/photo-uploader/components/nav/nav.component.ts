import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UploadPhotoLocalStorageService } from '../../services/upload-photo-local-storage.service';
import { PhotoEventService } from '../../services/photoEvent.service';

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

  constructor(
    private router: Router,
    private localStorageService: UploadPhotoLocalStorageService,
    private photoEventService: PhotoEventService) { }

  ngOnInit() {
    this.subscribeEvents();
  }

  ngOnDestroy(): void {
    this.photoUploaderModelSubscription.unsubscribe();
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

  private subscribeEvents() {
    this.photoUploaderCountOfAcctualPhotosSubscription = this.photoEventService.getPhotoUploaderCountOfAcctualPhotos()
      .subscribe(photosCount => this.setCountOfPhotos(photosCount));
    this.photoUploaderModelSubscription = this.photoEventService.getPhotoUploaded()
      .subscribe(isPhotoUploaded => this.showUploadedBtn(isPhotoUploaded));
  }
}

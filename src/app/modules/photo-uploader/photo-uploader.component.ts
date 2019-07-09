import { Component, OnInit } from '@angular/core';
import { UploadPhotoLocalStorageService } from './services/upload-photo-local-storage.service';

@Component({
  selector: 'app-photo-uploader',
  templateUrl: './photo-uploader.component.html',
  styleUrls: ['./photo-uploader.component.scss']
})
export class PhotoUploaderComponent implements OnInit {

  constructor(private localStorageService: UploadPhotoLocalStorageService ) { }

  ngOnInit() {
    this.localStorageService.initializePhoto();
  }

}

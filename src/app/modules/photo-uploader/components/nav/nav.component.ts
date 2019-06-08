import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UploadPhotoLocalStorageService } from '../../services/upload-photo-local-storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private router: Router, private localStorageService: UploadPhotoLocalStorageService) { }

  ngOnInit() {
  }

  cancelUploader() {
    this.localStorageService.clearStorage();
    this.router.navigate(['/']);
  }
}

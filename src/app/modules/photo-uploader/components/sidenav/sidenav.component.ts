import { Component, OnInit, OnDestroy } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {

  public isUploadedPhoto = false;
  public subscription: any;

  constructor(private sidenavService: SidenavService) { }

  private mediaMatcher: MediaQueryList =
  matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  ngOnInit() {
    this.subscription = this.sidenavService.getPhotoUploaded()
      .subscribe(isPhotoUploader => this.photoUploaded(isPhotoUploader));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

  photoUploaded(isPhotoUploaded: boolean) {
    this.isUploadedPhoto = isPhotoUploaded;
  }
}

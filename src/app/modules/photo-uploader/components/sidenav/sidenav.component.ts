import { Component, OnInit, OnDestroy } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {

  public isUploadedPhoto = false;
  public subscription: any;
  isEditMode: false;
  sidenavPhotoForm: FormGroup;

  constructor(private sidenavService: SidenavService, private formBuilder: FormBuilder) { }

  private mediaMatcher: MediaQueryList =
  matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  ngOnInit() {
    this.subscription = this.sidenavService.getPhotoUploaded()
      .subscribe(isPhotoUploader => this.photoUploaded(isPhotoUploader));
    this.createSidenavPhotoForm();
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

  createSidenavPhotoForm() {
    this.sidenavPhotoForm = this.formBuilder.group({
      photoTitle: ['', [Validators.required]],
      photoDescription: ['', [Validators.required]],
      photoTags: ['']
    });
  }
}

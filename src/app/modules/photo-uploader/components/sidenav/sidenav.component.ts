import { Component, OnInit, OnDestroy } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  public isUploadedPhoto = false;
  public subscription: any;
  isEditMode: false;
  sidenavPhotoForm: FormGroup;
  tags: Array<string>;
  color = 'Accent';

  constructor(private sidenavService: SidenavService, private formBuilder: FormBuilder) { }

  private mediaMatcher: MediaQueryList =
  matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  ngOnInit() {
    this.subscription = this.sidenavService.getPhotoUploaded()
      .subscribe(isPhotoUploader => this.photoUploaded(isPhotoUploader));
    this.createSidenavPhotoForm();
    this.tags = new Array<string>();
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


  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      // this.fruits.push({name: value.trim()});
      this.tags.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeTag(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
}

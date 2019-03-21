/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PhotoUploaderTagsDescPreviewSecondstepComponent } from './photo-uploader-tags-desc-preview-secondstep.component';

describe('PhotoUploaderTagsDescPreviewSecondstepComponent', () => {
  let component: PhotoUploaderTagsDescPreviewSecondstepComponent;
  let fixture: ComponentFixture<PhotoUploaderTagsDescPreviewSecondstepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoUploaderTagsDescPreviewSecondstepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoUploaderTagsDescPreviewSecondstepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

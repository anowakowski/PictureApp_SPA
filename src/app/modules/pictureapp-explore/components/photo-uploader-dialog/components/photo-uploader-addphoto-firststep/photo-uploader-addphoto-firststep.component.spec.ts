/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PhotoUploaderAddphotoFirststepComponent } from './photo-uploader-addphoto-firststep.component';

describe('PhotoUploaderAddphotoFirststepComponent', () => {
  let component: PhotoUploaderAddphotoFirststepComponent;
  let fixture: ComponentFixture<PhotoUploaderAddphotoFirststepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoUploaderAddphotoFirststepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoUploaderAddphotoFirststepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

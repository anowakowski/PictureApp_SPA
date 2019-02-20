/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PhotoCommentButtomSheetComponent } from './photo-comment-buttom-sheet.component';

describe('PhotoCommentButtomSheetComponent', () => {
  let component: PhotoCommentButtomSheetComponent;
  let fixture: ComponentFixture<PhotoCommentButtomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoCommentButtomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoCommentButtomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

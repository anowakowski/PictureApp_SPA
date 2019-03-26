/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UploaderContentComponent } from './uploader-content.component';

describe('UploaderContentComponent', () => {
  let component: UploaderContentComponent;
  let fixture: ComponentFixture<UploaderContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploaderContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploaderContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

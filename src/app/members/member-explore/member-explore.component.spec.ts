/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MemberExploreComponent } from './member-explore.component';

describe('MemberExploreComponent', () => {
  let component: MemberExploreComponent;
  let fixture: ComponentFixture<MemberExploreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberExploreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

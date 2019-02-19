/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SidenavUserprofileChartComponent } from './sidenav-userprofile-chart.component';

describe('SidenavUserprofileChartComponent', () => {
  let component: SidenavUserprofileChartComponent;
  let fixture: ComponentFixture<SidenavUserprofileChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavUserprofileChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavUserprofileChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

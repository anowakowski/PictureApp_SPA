import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeberEditComponent } from './meber-edit.component';

describe('MeberEditComponent', () => {
  let component: MeberEditComponent;
  let fixture: ComponentFixture<MeberEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeberEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeberEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

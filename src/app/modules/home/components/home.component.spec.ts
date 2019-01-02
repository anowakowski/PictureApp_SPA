import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';

import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';

import { AuthService } from 'src/app/services/auth.service';
import { SnacbarAlertService } from 'src/app/services/snacbar-alert.service';
import { HomeSectionComponent } from './home-section/homes-section.component';
import { NavComponent } from './nav/nav.component';
import { ExploreSectionComponent } from './explore-section/explore-section.component';
import { CreateShareSectionComponent } from './create-share-section/create-share-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let de: DebugElement;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
          declarations: [
              HomeComponent,
              HomeSectionComponent,
              NavComponent,
              ExploreSectionComponent,
              CreateShareSectionComponent,
              FooterSectionComponent
            ],
          providers: [AuthService, SnacbarAlertService],
          imports: [
              NgxSpinnerModule,
              FormsModule,
              ReactiveFormsModule,
              MaterialModule,
              HttpClientModule,
              RouterTestingModule,
              BrowserAnimationsModule
            ]
        })
        .compileComponents();
      }));


    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;

        fixture.detectChanges();
    });

    it ('should create a `HomeComponent`', () => {
        expect(component).toBeTruthy();
    });

    it ('should render `ngx-spinner`', () => {
        const attribiute = fixture.debugElement.query(By.css('ngx-spinner'));
        expect(attribiute).not.toBeNull();
    });

    it ('should render `app-nav`', () => {
        const attribiute = fixture.debugElement.query(By.css('app-nav'));
        expect(attribiute).not.toBeNull();
    });

    it ('should render `app-home-section`', () => {
        const attribiute = fixture.debugElement.query(By.css('app-home-section'));
        expect(attribiute).not.toBeNull();
    });

    it ('should render `app-explore-section`', () => {
        const attribiute = fixture.debugElement.query(By.css('app-explore-section'));
        expect(attribiute).not.toBeNull();
    });

    it ('should render `app-create-share-section`', () => {
        const attribiute = fixture.debugElement.query(By.css('app-create-share-section'));
        expect(attribiute).not.toBeNull();
    });

    it ('should render `app-footer-section`', () => {
        const attribiute = fixture.debugElement.query(By.css('app-footer-section'));
        expect(attribiute).not.toBeNull();
    });
});





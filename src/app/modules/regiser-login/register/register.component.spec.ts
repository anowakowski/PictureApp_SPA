import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { RegisterComponent } from './register.component';
import { AuthService } from 'src/app/services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { SnacbarAlertService } from 'src/app/services/snacbar-alert.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HomeSectionRegisterFormComponent } from './components/home-section-registerForm/homes-section-registerForm.component';
import { NavComponent } from './components/nav/nav.component';
import { ExploreSectionComponent } from './components/explore-section/explore-section.component';
import { CreateShareSectionComponent } from './components/create-share-section/create-share-section.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';
import { RegisterFormComponent } from 'src/app/components/register-form/register-form.component';
import { LoginDialogComponent } from 'src/app/components/login-dialog/login-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';


describe('RegisterComponent', () => {
    let component: RegisterComponent;
    let fixture: ComponentFixture<RegisterComponent>;
    let de: DebugElement;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
          declarations: [
              RegisterComponent,
              HomeSectionRegisterFormComponent,
              NavComponent,
              ExploreSectionComponent,
              CreateShareSectionComponent,
              FooterSectionComponent,
              RegisterFormComponent,
              LoginDialogComponent
            ],
          providers: [AuthService, SnacbarAlertService],
          imports: [
              NgxSpinnerModule,
              FormsModule,
              ReactiveFormsModule,
              MaterialModule,
              HttpClientModule,
              RouterTestingModule
            ]
        })
        .compileComponents();
      }));


    beforeEach(() => {
        fixture = TestBed.createComponent(RegisterComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;

        fixture.detectChanges();
    });

    it ('should create a `RegisterComponent`', () => {
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

    it ('should render `app-home-section-registerform`', () => {
        const attribiute = fixture.debugElement.query(By.css('app-home-section-registerform'));
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





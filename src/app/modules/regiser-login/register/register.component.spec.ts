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
          // providers: [ {provide: MessageService, useValue: serviceStub} ]

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

});





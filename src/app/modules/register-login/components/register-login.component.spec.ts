import { RegisterLoginComponent } from './register-login.component';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from '../../home/components/nav/nav.component';
import { AuthService } from 'src/app/services/auth.service';
import { SnacbarAlertService } from 'src/app/services/snacbar-alert.service';
import { By } from '@angular/platform-browser';

describe('RegisterLoginComponent', () => {
    let component: RegisterLoginComponent;
    let fixture: ComponentFixture<RegisterLoginComponent>;
    let de: DebugElement;


    beforeEach(async(() => {

        TestBed.configureTestingModule({
          declarations: [
                RegisterLoginComponent,
                RegisterComponent,
                LoginComponent,
                NavComponent
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
        fixture = TestBed.createComponent(RegisterLoginComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;

        fixture.detectChanges();
    });

    it ('should create a `RegisterLoginComponent`', () => {
        expect(component).toBeTruthy();
    });

    it ('should render `app-nav`', () => {
        const attribiute = fixture.debugElement.query(By.css('app-nav'));
        expect(attribiute).not.toBeNull();
    });

    it ('should render `ngx-spinner`', () => {
        const attribiute = fixture.debugElement.query(By.css('ngx-spinner'));
        expect(attribiute).not.toBeNull();
    });

    it('should render router-outlet', () => {
        const attribiute = fixture.debugElement.query(By.css('router-outlet'));
        expect(attribiute).not.toBeNull();
    });
});

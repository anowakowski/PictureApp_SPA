import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeSectionRegisterFormComponent } from './register/components/home-section-registerForm/homes-section-registerForm.component';
import { NavComponent } from './register/components/nav/nav.component';
import { ExploreSectionComponent } from './register/components/explore-section/explore-section.component';
import { CreateShareSectionComponent } from './register/components/create-share-section/create-share-section.component';
import { FooterSectionComponent } from './register/components/footer-section/footer-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponent } from 'src/app/components/register-form/register-form.component';
import { LoginDialogComponent } from 'src/app/components/login-dialog/login-dialog.component';
import { MaterialModule } from '../shared/material/material.module';
import { SnacbarAlertService } from '../../services/snacbar-alert.service';
import { NgxSpinnerModule } from 'ngx-spinner';

const routes: Routes = [
  {path: '', component: RegisterComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
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
  entryComponents: [
    LoginDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxSpinnerModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    SnacbarAlertService
  ]
})
export class HomeRegisterModule { }

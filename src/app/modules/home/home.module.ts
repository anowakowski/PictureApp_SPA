import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { HomeSectionRegisterFormComponent } from './components/home-section-registerForm/homes-section-registerForm.component';
import { NavComponent } from './components/nav/nav.component';
import { ExploreSectionComponent } from './components/explore-section/explore-section.component';
import { CreateShareSectionComponent } from './components/create-share-section/create-share-section.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponent } from 'src/app/components/register-form/register-form.component';
import { SnacbarAlertService } from '../../services/snacbar-alert.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MaterialModule } from '../shared/material/material.module';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    HomeComponent,
    HomeSectionRegisterFormComponent,
    NavComponent,
    ExploreSectionComponent,
    CreateShareSectionComponent,
    FooterSectionComponent,
    RegisterFormComponent
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
export class HomeModule { }

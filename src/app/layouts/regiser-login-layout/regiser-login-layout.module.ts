import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeSectionRegisterFormComponent } from './register/components/home-section-registerForm/homes-section-registerForm.component';
import { NavComponent } from './register/components/nav/nav.component';
import { ExploreSectionComponent } from './register/components/explore-section/explore-section.component';
import { CreateShareSectionComponent } from './register/components/create-share-section/create-share-section.component';
import { FooterSectionComponent } from './register/components/footer-section/footer-section.component';


const routes: Routes = [
  {path: '', component: RegisterComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    RegisterComponent,
    HomeSectionRegisterFormComponent,
    NavComponent,
    ExploreSectionComponent,
    CreateShareSectionComponent,
    FooterSectionComponent
  ]
})
export class RegiserLoginLayoutModule { }

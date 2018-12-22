import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavComponent } from './nav/nav.component';
import { MaterialModule } from '../shared/material/material.module';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent}
];

@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }

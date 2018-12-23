import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home-login.component';
import { NavComponent } from './nav/nav.component';
import { MaterialModule } from '../shared/material/material.module';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SnacbarAlertService } from 'src/app/services/snacbar-alert.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: '', redirectTo: 'auth', pathMatch: 'full'},
      {path: 'auth', component: LoginComponent}
    ]
  }
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
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    SnacbarAlertService
  ]
})
export class HomeLoginModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/register-login.component';
import { NavComponent } from './components/nav/nav.component';
import { MaterialModule } from '../shared/material/material.module';
import { LoginComponent } from './components/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SnacbarAlertService } from 'src/app/services/snacbar-alert.service';
import { SearchPicturesDialogComponent } from './components/search-pictures-dialog/search-pictures-dialog.component';
import { DialogService } from '../services/dialog.service';
import { RegisterComponent } from '../home-register/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: '', redirectTo: 'auth', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    SearchPicturesDialogComponent
  ],
  entryComponents: [
    SearchPicturesDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    SnacbarAlertService,
    DialogService
  ]
})
export class RegisterLoginModule { }

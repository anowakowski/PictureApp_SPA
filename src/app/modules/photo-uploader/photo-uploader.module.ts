import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoUploaderComponent } from './photo-uploader.component';
import { MaterialModule } from '../shared/material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { Routes, RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';


const routes: Routes = [
  {
    path: '',
    component: PhotoUploaderComponent
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    PhotoUploaderComponent,
    NavComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgxSpinnerModule,
    RouterModule.forChild(routes)
  ]
})
export class PhotoUploaderModule { }

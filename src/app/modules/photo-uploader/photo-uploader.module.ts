import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoUploaderComponent } from './photo-uploader.component';
import { MaterialModule } from '../shared/material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { Routes, RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UploaderContentComponent } from './components/uploader-content/uploader-content.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FileUploadModule } from 'ng2-file-upload';


const routes: Routes = [
  {
    path: '',
    component: PhotoUploaderComponent,
    children: [
      { path: '', component: UploaderContentComponent }
    ]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    PhotoUploaderComponent,
    NavComponent,
    SidenavComponent,
    UploaderContentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgxSpinnerModule,
    FlexLayoutModule,
    FileUploadModule,
    RouterModule.forChild(routes)
  ]
})
export class PhotoUploaderModule { }

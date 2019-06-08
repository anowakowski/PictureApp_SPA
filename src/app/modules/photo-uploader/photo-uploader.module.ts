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
import { UploaderContentCardComponent } from './components/uploader-content-card/uploader-content-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadPhotoLocalStorageService } from './services/upload-photo-local-storage.service';
// tslint:disable-next-line:max-line-length
import { DeleteConfirmationDialogComponent } from '../photo-confirmation-panels/components/delete-confirmation-dialog/delete-confirmation-dialog.component';


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
    UploaderContentComponent,
    UploaderContentCardComponent,
    DeleteConfirmationDialogComponent
  ],
  entryComponents: [
    DeleteConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgxSpinnerModule,
    FlexLayoutModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    UploadPhotoLocalStorageService
  ]
})
export class PhotoUploaderModule { }

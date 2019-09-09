import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteConfirmationDialogComponent } from './components/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { MaterialModule } from '../shared/material/material.module';
import { WarrningDialogComponent } from './components/warrning-dialog/warrning-dialog.component';
import { PhotoUploaderContentDialogComponent } from './components/photo-uploader-content-dialog/photo-uploader-content-dialog.component';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FileUploadModule
  ],
  declarations: [
    DeleteConfirmationDialogComponent,
    WarrningDialogComponent,
    PhotoUploaderContentDialogComponent
  ],
  exports: [
    DeleteConfirmationDialogComponent,
    WarrningDialogComponent
  ],
  entryComponents: [
    DeleteConfirmationDialogComponent,
    WarrningDialogComponent,
    PhotoUploaderContentDialogComponent
  ]

})
export class PhotoConfirmationPanelsModule { }

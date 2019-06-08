import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteConfirmationDialogComponent } from './components/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    DeleteConfirmationDialogComponent],
  exports: [
    DeleteConfirmationDialogComponent
  ],
  entryComponents: [
    DeleteConfirmationDialogComponent
  ]

})
export class PhotoConfirmationPanelsModule { }

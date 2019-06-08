import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoConfirmationPanelsComponent } from './photo-confirmation-panels.component';
import { DeleteConfirmationDialogComponent } from './components/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    DeleteConfirmationDialogComponent
  ],
  declarations: [PhotoConfirmationPanelsComponent]
})
export class PhotoConfirmationPanelsModule { }

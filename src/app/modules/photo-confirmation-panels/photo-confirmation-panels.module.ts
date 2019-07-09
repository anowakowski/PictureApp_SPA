import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteConfirmationDialogComponent } from './components/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { MaterialModule } from '../shared/material/material.module';
import { WarrningDialogComponent } from './components/warrning-dialog/warrning-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    DeleteConfirmationDialogComponent,
    WarrningDialogComponent
  ],
  exports: [
    DeleteConfirmationDialogComponent,
    WarrningDialogComponent
  ],
  entryComponents: [
    DeleteConfirmationDialogComponent,
    WarrningDialogComponent
  ]

})
export class PhotoConfirmationPanelsModule { }

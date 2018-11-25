import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeberEditComponent } from './meber-edit/meber-edit.component';


@NgModule({
  declarations: [MeberEditComponent],
  exports: [
    MeberEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PhotoMembersModule { }

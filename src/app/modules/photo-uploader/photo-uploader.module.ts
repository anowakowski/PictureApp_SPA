import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoUploaderComponent } from './photo-uploader.component';
import { MaterialModule } from '../shared/material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    PhotoUploaderComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SidenavComponent
  ]
})
export class PhotoUploaderModule { }

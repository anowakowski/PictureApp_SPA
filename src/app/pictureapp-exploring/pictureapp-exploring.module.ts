import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureappExploringComponent } from './pictureapp-exploring.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: PictureappExploringComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    PictureappExploringComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PictureappExploringModule { }

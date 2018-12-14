import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PhotoExploreComponent } from './photo-explore/photo-explore.component';

const routes: Routes = [
  {path: '', component: PhotoExploreComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PhotoExploreComponent]
})
export class PictureAppExploreLayoutModule { }

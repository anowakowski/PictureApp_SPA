import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PhotoExploreComponent } from './photo-explore/photo-explore.component';
import { PictureExploreLayoutComponent } from './picture-explore-layout.component';
import { AuthGuard } from 'src/app/_guards/auth.guard';

const routes: Routes = [
  { path: '',
    component: PictureExploreLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'photo-exp', component: PhotoExploreComponent}
  ]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    PhotoExploreComponent,
    PictureExploreLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    AuthGuard
  ]
})
export class PictureAppExploreLayoutModule { }

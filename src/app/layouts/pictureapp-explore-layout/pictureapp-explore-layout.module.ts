import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PhotoExploreComponent } from './photo-explore/photo-explore.component';
import { PictureExploreLayoutComponent } from './picture-explore-layout.component';
import { AuthGuard } from 'src/app/_guards/auth.guard';

import { ExploreUsersListResolver } from 'src/app/_resolvers/explore-users-list.resolver';
import { PhotoCardComponent } from 'src/app/components/photo-card/photo-card.component';
import { NgxSpinnerModule } from 'ngx-spinner';

const routes: Routes = [
  { path: '',
    component: PictureExploreLayoutComponent,
    resolve: {users: ExploreUsersListResolver},
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
    children: [
      {path: '', component: PhotoExploreComponent}
  ]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    PhotoExploreComponent,
    PictureExploreLayoutComponent,
    PhotoCardComponent],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    AuthGuard,
    ExploreUsersListResolver
  ]
})
export class PictureAppExploreLayoutModule { }

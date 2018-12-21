import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PhotoExploreComponent } from './photo-explore/photo-explore.component';
import { PictureExploreLayoutComponent } from './picture-explore-layout.component';
import { AuthGuard } from '../../guards/auth.guard';

import { ExploreUsersListResolver } from '../../resolvers/explore-users-list.resolver';
import { PhotoCardComponent } from '../../components/photo-card/photo-card.component';
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

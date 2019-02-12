import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PhotoExploreComponent } from './components/photo-explore/photo-explore.component';
import { PictureExploreComponent } from './picture-explore.component';
import { AuthGuard } from '../../guards/auth.guard';

import { ExploreUsersListResolver } from '../../resolvers/explore-users-list.resolver';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MaterialModule } from '../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavComponent } from './components/nav/nav.component';
import { PhotoCardComponent } from './components/photo-card/photo-card.component';
import { PhotoDetailDialogComponent } from './components/photoDetail-dialog/photoDetail-dialog.component';
import { EditUserProfileComponent } from './components/edit-userProfile/edit-userProfile.component';


const routes: Routes = [
  { path: '',
    component: PictureExploreComponent,
    resolve: {users: ExploreUsersListResolver},
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
    children: [
      {path: '', component: PhotoExploreComponent},
      {path: 'editUserProfile', component: EditUserProfileComponent}
  ]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    PhotoExploreComponent,
    PictureExploreComponent,
    PhotoCardComponent,
    SidenavComponent,
    NavComponent,
    PhotoDetailDialogComponent,
    EditUserProfileComponent
  ],
  entryComponents: [
    PhotoDetailDialogComponent
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    AuthGuard,
    ExploreUsersListResolver
  ]
})
export class PictureAppExploreModule { }

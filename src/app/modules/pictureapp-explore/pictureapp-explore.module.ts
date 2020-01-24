import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PhotoExploreComponent } from './components/photo-explore/photo-explore.component';
import { PictureExploreComponent } from './picture-explore.component';
import { AuthGuard } from '../../guards/auth.guard';

import { ExploreUsersListResolver } from '../../resolvers/explore-users-list.resolver';
import { ExploreUserResolver } from 'src/app/resolvers/explore-user.resolver';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MaterialModule } from '../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';

import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavComponent } from './components/nav/nav.component';

import { EditUserProfileComponent } from './components/edit-userProfile/edit-userProfile.component';
// tslint:disable-next-line:max-line-length
import { SidenavUserprofileCardComponent } from './components/sidenav/components/sidenav-userprofile-card/sidenav-userprofile-card.component';
// tslint:disable-next-line:max-line-length
import { SidenavUserprofileChartComponent } from './components/sidenav/components/sidenav-userprofile-chart/sidenav-userprofile-chart.component';
import { EditUserPhotosComponent } from './components/edit-userProfile/components/edit-user-photos/edit-user-photos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PhotoDetailDialogComponent } from './components/photo-explore/components/photoDetail-dialog/photoDetail-dialog.component';
import { PhotoCardComponent } from './components/photo-explore/components/photo-card/photo-card.component';
// tslint:disable-next-line:max-line-length
import { PhotoCommentButtomSheetComponent } from './components/photo-explore/components/photo-comment-buttom-sheet/photo-comment-buttom-sheet.component';

// tslint:disable-next-line:max-line-length
import { DeleteConfirmationDialogComponent } from '../photo-confirmation-panels/components/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { PhotoConfirmationPanelsModule } from '../photo-confirmation-panels/photo-confirmation-panels.module';

import { FileUploadModule } from 'ng2-file-upload';

const routes: Routes = [
  { path: '',
    component: PictureExploreComponent,
    resolve: {users: ExploreUsersListResolver},
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
    children: [
      {path: '', component: PhotoExploreComponent},
      {path: 'editUserProfile', component: EditUserProfileComponent, resolve: {user: ExploreUserResolver}}
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
    EditUserProfileComponent,
    SidenavUserprofileCardComponent,
    SidenavUserprofileChartComponent,
    EditUserPhotosComponent,
    PhotoCommentButtomSheetComponent
  ],
  entryComponents: [
    PhotoDetailDialogComponent,
    PhotoCommentButtomSheetComponent
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    MaterialModule,
    FlexLayoutModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    PhotoConfirmationPanelsModule,
    FileUploadModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    AuthGuard,
    ExploreUsersListResolver,
    ExploreUserResolver
  ]
})
export class PictureAppExploreModule { }

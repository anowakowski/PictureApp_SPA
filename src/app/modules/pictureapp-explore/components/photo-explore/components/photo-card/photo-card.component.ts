import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { MatDialog, MatBottomSheet } from '@angular/material';

import { Photo } from 'src/app/models/photo';
import { PhotoDetailDialogComponent } from '../photoDetail-dialog/photoDetail-dialog.component';
import { PhotoCommentButtomSheetComponent } from '../photo-comment-buttom-sheet/photo-comment-buttom-sheet.component';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss']
})
export class PhotoCardComponent implements OnInit {
  @Input() user: User;
  mainPhoto: Photo;
  currentPhoto: Photo;
  isFollower = false;

  constructor(private userService: UserService, private dialog: MatDialog, private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    this.isFollower = this.user.isFollowerForCurrentUser;
    this.setUserProfileMainPhoto();
    this.setCurrentPhotoToDisplay();
  }

  followUser(user: User) {
    this.userService.setFollower(user.id).subscribe(() => {
      this.user.isFollowerForCurrentUser = true;
      this.isFollower = true;
    }, error => {
    });
  }

  unfollowUser(user: User) {
    this.userService.setUnFollowUser(user.id).subscribe(() => {

      this.user.isFollowerForCurrentUser = false;
      this.isFollower = false;
    }, error => {

    });
  }

  OpenPhotoDetailDialog(user: User, currentPhoto: Photo): void {
    const dialogRef = this.dialog.open(PhotoDetailDialogComponent, {
      data: { user, currentPhoto }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  openCommnetBottomSheet(photo: Photo) {
    this.bottomSheet.open(PhotoCommentButtomSheetComponent, {data: photo});
  }

  private setUserProfileMainPhoto() {
    this.mainPhoto = this.user.photos.find(x => x.isMain);
  }

  private setCurrentPhotoToDisplay() {
    this.currentPhoto = this.user.photos.find(x => !x.isMain);
  }
}

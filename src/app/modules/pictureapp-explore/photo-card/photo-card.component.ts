import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material';
import { PhotoDetailDialogComponent } from '../photoDetail-dialog/photoDetail-dialog.component';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss']
})
export class PhotoCardComponent implements OnInit {
  @Input() user: User;
  isFollower = false;

  constructor(private userService: UserService, private dialog: MatDialog) { }

  ngOnInit() {
    this.isFollower = this.user.isFollowerForCurrentUser;
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

  OpenPhotoDetailDialog(user: User): void {
    const dialogRef = this.dialog.open(PhotoDetailDialogComponent, {
      data: { user }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}

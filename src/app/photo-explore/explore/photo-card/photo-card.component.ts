import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss']
})
export class PhotoCardComponent implements OnInit {
  @Input() user: User;
  isFollower = false;

  constructor(private userService: UserService, private alertifyService: AlertifyService) { }

  ngOnInit() {
    this.isFollower = this.user.isFollowerForCurrentUser;
  }

  followUser(user: User) {
    this.userService.setFollower(user.id).subscribe(() => {
      this.alertifyService.success('you are follow ' + user.username + 'now');
      this.user.isFollowerForCurrentUser = true;
      this.isFollower = true;
    }, error => {
      this.alertifyService.error(error);
    });
  }

  unfollowUser(user: User) {
    this.alertifyService.confirm('Are you sure you want to unfollow ' + user.username + '?', () => {
      this.userService.setUnFollowUser(user.id).subscribe(() => {
        this.alertifyService.warning('you are unfollow ' + user.username + 'now');
        this.user.isFollowerForCurrentUser = false;
        this.isFollower = false;
      }, error => {
        this.alertifyService.error(error);
      });
    });
  }
}

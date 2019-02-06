import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss']
})
export class PhotoCardComponent implements OnInit {
  @Input() user: User;
  isFollower = false;

  constructor(private userService: UserService) { }

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

  showImg() {
    console.log('show img');
  }
}

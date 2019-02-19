import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidenav-userprofile-card',
  templateUrl: './sidenav-userprofile-card.component.html',
  styleUrls: ['./sidenav-userprofile-card.component.scss']
})
export class SidenavUserprofileCardComponent implements OnInit {

  constructor(private userService: UserService) { }

  public currentUser: User;

  ngOnInit() {
    this.getCurrentUser();
  }

  private getCurrentUser() {

    this.userService.getUserInfo().then(response => {
      this.currentUser = response;
    });
  }

}

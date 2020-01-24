import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-sidenav-userprofile-card',
  templateUrl: './sidenav-userprofile-card.component.html',
  styleUrls: ['./sidenav-userprofile-card.component.scss']
})
export class SidenavUserprofileCardComponent implements OnInit {

  @Output() editSectionUser = new EventEmitter<void>();

  constructor(private userService: UserService, private localStorageService: LocalStorageService) { }

  public currentUser: User;
  public mainPhotoUrl: string;

  ngOnInit() {
    this.getCurrentUser();
  }

  private getCurrentUser() {

    this.userService.getBaseUserInfo().then(response => {
      this.currentUser = response;
      this.mainPhotoUrl = this.currentUser.photoUrl;
      this.localStorageService.setItem('currentUserData', this.currentUser);
    });
  }

  emitEditUserProfileAsCurrentSection() {
    this.editSectionUser.emit();
  }
}

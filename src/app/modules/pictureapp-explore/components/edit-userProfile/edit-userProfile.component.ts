import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-userProfile.component.html',
  styleUrls: ['./edit-userProfile.component.scss']
})
export class EditUserProfileComponent implements OnInit {

  user: User;
  mainPhoto: Photo;
  userPhotos: Photo[];
  constructor(private route: ActivatedRoute, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.route.data.subscribe(data => {
      this.user = data['user'];
      this.setMainPhoto();
      this.setListOfPhotosWithoutMainPicture();
      this.spinner.hide();
    }, error => {
    });
  }

  setMainPhoto() {
    this.mainPhoto = this.user.photos.find(p => p.isMain);
  }

  setListOfPhotosWithoutMainPicture() {
    this.userPhotos = this.user.photos.filter(p => !p.isMain);
  }
}

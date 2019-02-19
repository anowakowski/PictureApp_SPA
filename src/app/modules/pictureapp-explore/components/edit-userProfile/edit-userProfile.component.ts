import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-userProfile.component.html',
  styleUrls: ['./edit-userProfile.component.scss']
})
export class EditUserProfileComponent implements OnInit {

  user: User;
  constructor(private route: ActivatedRoute, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.route.data.subscribe(data => {
      this.user = data['user'];
      this.spinner.hide();
    }, error => {
    });
  }

}

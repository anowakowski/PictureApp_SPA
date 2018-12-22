import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../models/user';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-photo-explore',
  templateUrl: './photo-explore.component.html',
  styleUrls: ['./photo-explore.component.scss']
})
export class PhotoExploreComponent implements OnInit {
  users: User[];
  constructor(private route: ActivatedRoute, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.route.data.subscribe(data => {
      this.users = data['users'];
      this.spinner.hide();
    }, error => {
    });
  }

}

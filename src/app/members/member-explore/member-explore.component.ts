import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-explore',
  templateUrl: './member-explore.component.html',
  styleUrls: ['./member-explore.component.scss']
})
export class MemberExploreComponent implements OnInit {

  users: User[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.users = data['users'];
    });
  }

}

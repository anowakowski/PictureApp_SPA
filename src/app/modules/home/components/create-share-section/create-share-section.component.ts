import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-share-section',
  templateUrl: './create-share-section.component.html',
  styleUrls: ['./create-share-section.component.scss']
})
export class CreateShareSectionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDialoginPage(): void {
    this.router.navigate(['/login']);
  }

}

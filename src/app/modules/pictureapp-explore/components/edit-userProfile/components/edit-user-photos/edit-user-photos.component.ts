import { Component, OnInit, Input } from '@angular/core';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'app-edit-user-photos',
  templateUrl: './edit-user-photos.component.html',
  styleUrls: ['./edit-user-photos.component.scss']
})
export class EditUserPhotosComponent implements OnInit {

  @Input() photo: Photo;

  constructor() { }

  ngOnInit() {
  }

}

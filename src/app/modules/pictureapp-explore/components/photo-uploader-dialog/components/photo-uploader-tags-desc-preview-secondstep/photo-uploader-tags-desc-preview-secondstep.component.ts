import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'app-photo-uploader-tags-desc-preview-secondstep',
  templateUrl: './photo-uploader-tags-desc-preview-secondstep.component.html',
  styleUrls: ['./photo-uploader-tags-desc-preview-secondstep.component.scss']
})
export class PhotoUploaderTagsDescPreviewSecondstepComponent implements OnInit {

  photo: Photo;
  files: File[];

  constructor() { }

  ngOnInit() {

  }



}

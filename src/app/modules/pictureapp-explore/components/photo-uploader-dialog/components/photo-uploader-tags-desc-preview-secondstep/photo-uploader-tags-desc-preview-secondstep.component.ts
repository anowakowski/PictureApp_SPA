import { Component, OnInit, Input } from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { PhotoUploaderModel } from 'src/app/models/photo-uploader-model';

@Component({
  selector: 'app-photo-uploader-tags-desc-preview-secondstep',
  templateUrl: './photo-uploader-tags-desc-preview-secondstep.component.html',
  styleUrls: ['./photo-uploader-tags-desc-preview-secondstep.component.scss']
})
export class PhotoUploaderTagsDescPreviewSecondstepComponent implements OnInit {

  @Input() photoUploaderModel: PhotoUploaderModel;

  constructor() { }

  ngOnInit() {

  }



}

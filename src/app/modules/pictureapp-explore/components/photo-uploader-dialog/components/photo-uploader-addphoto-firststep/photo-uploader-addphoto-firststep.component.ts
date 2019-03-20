import { Component, OnInit, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-photo-uploader-addphoto-firststep',
  templateUrl: './photo-uploader-addphoto-firststep.component.html',
  styleUrls: ['./photo-uploader-addphoto-firststep.component.scss']
})
export class PhotoUploaderAddphotoFirststepComponent implements OnInit {

  @Input() FileUploaderInput: FileUploader;

  public uploader: FileUploader;
  baseUrl = environment.apiUrl;
  constructor() { }

  ngOnInit() {
    this.initUploader();

    console.log(this.FileUploaderInput);
  }

  initUploader() {
    this.uploader = this.FileUploaderInput;
  }
}

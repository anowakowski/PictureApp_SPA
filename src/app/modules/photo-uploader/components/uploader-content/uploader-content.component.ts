import { Component, OnInit, EventEmitter } from '@angular/core';
import { FileUploader, FileItem } from 'ng2-file-upload';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PhotoUploaderModel } from 'src/app/models/photo-uploader-model';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-uploader-content',
  templateUrl: './uploader-content.component.html',
  styleUrls: ['./uploader-content.component.scss']
})
export class UploaderContentComponent implements OnInit {

  public uploader: FileUploader;
  baseUrl = environment.apiUrl;
  uploadPhotoForm: FormGroup;
  photoUploaderModels: PhotoUploaderModel[];

  public hasBaseDropZoneOver = false;
  public photoHasDroped = false;

  constructor(private sidenavService: SidenavService) { }

  ngOnInit() {
    this.photoUploaderModels = new Array<PhotoUploaderModel>();
    this.initUploader();
  }

  initUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl,
      authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['image'],
      disableMultipart: true,
      });
  }

  onChangePreviewImages() {
    this.photoHasDroped = true;
    this.prepareIndexForPhotoUploader();
    this.preparePhotoUploaderModel();

    this.sidenavService.emitPhotoUploaded(true);
  }

  GetPhotoUploaderModel(fileItem: FileItem): PhotoUploaderModel {
    const photoUploaderModel = this.photoUploaderModels.find(x => x.index === fileItem.index);

    return photoUploaderModel;
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  private preparePhotoUploaderModel() {
    const fileItems = this.uploader.queue;
    fileItems.forEach(fileItem => {
      const photoUploaderModel = new PhotoUploaderModel();
      photoUploaderModel.index = fileItem.index;
      if (fileItems.length === 1) {
        photoUploaderModel.isEditMode = true;
      }
      this.photoUploaderModels.push(photoUploaderModel);
    });
  }

  private prepareIndexForPhotoUploader() {
    const fileItems = this.uploader.queue;
    let index = 0;
    fileItems.forEach(fileItem => {
      fileItem.index = index;
      index++;
    });
  }
}

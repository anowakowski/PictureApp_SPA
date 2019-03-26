import { Component, OnInit, EventEmitter } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { MatDialog } from '@angular/material';
import { PhotoUploaderDialogComponent } from '../../../photo-uploader-dialog/photo-uploader-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-uploader',
  templateUrl: './photo-uploader.component.html',
  styleUrls: ['./photo-uploader.component.scss']
})
export class PhotoUploaderComponent implements OnInit {

  public uploader: FileUploader;
  public hasBaseDropZoneOver = false;


  constructor(private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.initUploader();
  }

  initUploader() {
    this.uploader = new FileUploader({
      disableMultipart: true,
      allowedFileType: ['image'],
      });
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public onFileSelected(event: EventEmitter<File[]>) {
    const file: File = event[0];
    this.router.navigate(['/photo-uploader']);


//    this.openPhotoUploaderDialog(file);
  }

  openPhotoUploaderDialog(file: File) {
    const dialogRef = this.dialog.open(PhotoUploaderDialogComponent, {
      minWidth: '1400px', minHeight: '800px', data: {file: file}
    });

    dialogRef.afterClosed().subscribe(result => {

    });

  }
}

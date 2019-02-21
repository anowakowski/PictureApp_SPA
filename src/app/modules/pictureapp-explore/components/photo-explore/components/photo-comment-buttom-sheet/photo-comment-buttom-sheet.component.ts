import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { Photo } from 'src/app/models/photo';
import { PhotoComment } from 'src/app/models/photoComment';

@Component({
  selector: 'app-photo-comment-buttom-sheet',
  templateUrl: './photo-comment-buttom-sheet.component.html',
  styleUrls: ['./photo-comment-buttom-sheet.component.scss']
})
export class PhotoCommentButtomSheetComponent implements OnInit {

  constructor(
    private bottomSheetRef: MatBottomSheetRef<PhotoCommentButtomSheetComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public photoComments: PhotoComment[]) { }

  currentPhotoComments: PhotoComment[];

  ngOnInit() {
    console.log(this.photoComments);
  }

  addcomment() {
    this.bottomSheetRef.dismiss();
  }
}

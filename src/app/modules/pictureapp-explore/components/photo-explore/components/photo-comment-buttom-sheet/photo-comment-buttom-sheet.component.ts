import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-photo-comment-buttom-sheet',
  templateUrl: './photo-comment-buttom-sheet.component.html',
  styleUrls: ['./photo-comment-buttom-sheet.component.scss']
})
export class PhotoCommentButtomSheetComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<PhotoCommentButtomSheetComponent>) { }

  ngOnInit() {

  }

}

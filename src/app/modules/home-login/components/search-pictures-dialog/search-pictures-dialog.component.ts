import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-pictures-dialog',
  templateUrl: './search-pictures-dialog.component.html',
  styleUrls: ['./search-pictures-dialog.component.scss']
})
export class SearchPicturesDialogComponent implements OnInit {
  searchPhotosForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<SearchPicturesDialogComponent>, private formBuilder: FormBuilder, ) { }

  ngOnInit() {
    this.createSearchPhotoForm();
  }

  createSearchPhotoForm() {
    this.searchPhotosForm = this.formBuilder.group({
      searchPhotos: ['']
    });
  }
  searchPictures() {
    console.log(this.searchPhotosForm.value);
  }

  close() {
    this.dialogRef.close(null);
  }
}

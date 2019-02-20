import { Component, OnInit, Input } from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user-photos',
  templateUrl: './edit-user-photos.component.html',
  styleUrls: ['./edit-user-photos.component.scss']
})
export class EditUserPhotosComponent implements OnInit {

  @Input() photo: Photo;
  editPhotoForm: FormGroup;
  isEdit = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createEditPhotoForm();
  }

  createEditPhotoForm() {
    this.editPhotoForm = this.formBuilder.group({
      photoTitle: ['title1', [Validators.required]],
      photoSubtitle: ['subtitle2', Validators.required],
      photoDescription: [this.photo.description, Validators.nullValidator]
    });
  }

  editPhoto(isEditMode: boolean) {
    this.isEdit = isEditMode;
  }

  submitChanges() {
    console.log('photo changes added');
  }
}

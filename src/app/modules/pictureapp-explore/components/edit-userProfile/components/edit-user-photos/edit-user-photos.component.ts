import { Component, OnInit, Input } from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
// tslint:disable-next-line:max-line-length
import { EditUserprofileConfirmationDialogComponent } from '../edit-userprofile-confirmation-dialog/edit-userprofile-confirmation-dialog.component';

@Component({
  selector: 'app-edit-user-photos',
  templateUrl: './edit-user-photos.component.html',
  styleUrls: ['./edit-user-photos.component.scss']
})
export class EditUserPhotosComponent implements OnInit {

  @Input() photo: Photo;
  editPhotoForm: FormGroup;
  isEdit = false;
  isInRemoving = false;

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog) { }

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

  openConfirmationDialog(photo: Photo) {
    this.isInRemoving = true;

    const dialogRef = this.dialog.open(EditUserprofileConfirmationDialogComponent, {
      data: {photo: photo}
    });

    dialogRef.afterClosed().subscribe(result => {
      const isConfirmPhotoRemove = result;
      if (isConfirmPhotoRemove) {
        // photo service to remove photo
      }
      this.isInRemoving = false;
    });
  }
}
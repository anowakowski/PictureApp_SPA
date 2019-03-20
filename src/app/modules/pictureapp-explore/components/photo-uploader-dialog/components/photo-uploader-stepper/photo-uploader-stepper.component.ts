import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-photo-uploader-stepper',
  templateUrl: './photo-uploader-stepper.component.html',
  styleUrls: ['./photo-uploader-stepper.component.scss']
})
export class PhotoUploaderStepperComponent implements OnInit {
  @Input() fileInput: File;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  currentFileUploader: FileUploader;
  test: string;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}

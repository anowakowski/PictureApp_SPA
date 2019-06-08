import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  text: string;
}

@Component({
  selector: 'app-warrning-dialog',
  templateUrl: './warrning-dialog.component.html',
  styleUrls: ['./warrning-dialog.component.scss']
})
export class WarrningDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<WarrningDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

}

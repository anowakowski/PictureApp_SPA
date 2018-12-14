import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  hide = true;

  constructor(
    private dialogRef: MatDialogRef<LoginDialogComponent>) { }

  ngOnInit() {
  }

  save() {
    console.log('login');
  }
  dismiss() {
    this.dialogRef.close(null);
  }


}

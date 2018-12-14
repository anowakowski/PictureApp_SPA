import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { UserService } from 'src/app/_services/user.service';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  hide = true;

  constructor(
    private dialogRef: MatDialogRef<LoginDialogComponent>,
    private userService: UserService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.dialogRef.close(null);
    this.router.navigate(['/photo-exp']);

    console.log('login');
  }
  dismiss() {
    this.dialogRef.close(null);
  }


}

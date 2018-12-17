import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { UserService } from 'src/app/_services/user.service';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ComponentType } from '@angular/core/src/render3';
import { SnacbarAlertService } from 'src/app/_services/snacbar-alert.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  hide = true;
  user: User;
  loginForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<LoginDialogComponent>,
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackbarAlertSerice: SnacbarAlertService,
    private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.createRegisterForm();
  }

  login() {
    if (this.loginForm.valid) {
      this.spinnerService.show();
      this.user = Object.assign({}, this.loginForm.value);
      this.authService.login(this.user).subscribe(() => {
          this.snackbarAlertSerice.openSnackbar('login to app', 500, null, 'orange-register-login-snackbar');
          this.dialogRef.close(this.user);
          this.router.navigate(['']);
        }, error => {
          this.snackbarAlertSerice.openSnackbar(error, 7000, null, 'orange-register-login-snackbar');
        }, () => {
          this.spinnerService.hide();
        });
     }
  }
  dismiss() {
    this.dialogRef.close(null);
  }

  createRegisterForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  getEmailErrorMessage() {
    return this.loginForm.get('email').hasError('required') ? 'You must enter a value' :
        this.loginForm.get('email').hasError('email') ? 'Not a valid email' :
            '';
  }

  getPasswordErrorMessage() {
    return this.loginForm.get('password').hasError('required') ? 'You must enter a value' : '';
  }
}

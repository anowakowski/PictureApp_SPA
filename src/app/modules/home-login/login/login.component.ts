import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnacbarAlertService } from 'src/app/services/snacbar-alert.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackbarAlertSerice: SnacbarAlertService,
    private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
  }

  login() {
    if (this.loginForm.valid) {
      this.spinnerService.show();
      this.user = Object.assign({}, this.loginForm.value);
      this.authService.login(this.user).subscribe(() => {
          this.snackbarAlertSerice.openSnackbar('login to app', 500, null, 'orange-register-login-snackbar');
          this.router.navigate(['']);
        }, error => {
          this.snackbarAlertSerice.openSnackbar(error, 7000, null, 'orange-register-login-snackbar');
        }, () => {
        });
     }
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

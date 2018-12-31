import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { SnacbarAlertService } from 'src/app/services/snacbar-alert.service';
import { NgxSpinnerService } from 'ngx-spinner';

const REQUIRES_MESSAGE = 'You must enter a value';
const NOTVALID_EMAIL_MESSAGE = 'Not a valid email';
const BLANK_MESSAGE = '';
const NOTVALID_PASSWORDMATCHES_MESSAGE = 'Password dont matches';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  hide = true;
  user: User;
  registerForm: FormGroup;


  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackbarAlertSerice: SnacbarAlertService,
    private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.createRegisterForm();
  }


  register() {
    if (this.registerForm.valid) {
      this.user = Object.assign({}, this.registerForm.value);
      this.authService.register(this.user).subscribe(() => {
        this.snackbarAlertSerice.openSnackbar('register successfully', 5000);
      }, error => {
        this.snackbarAlertSerice.openSnackbar(error, 7000, null, 'orange-register-login-snackbar');
      }, () => {
        this.authService.login(this.user).subscribe(() => {
          this.router.navigate(['/explore']);
        });
      });
    }
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {validator: this.passwordMatchValidator});
  }

  getEmailErrorMessage() {
    return this.isRequiredMessage('email') ? REQUIRES_MESSAGE :
        this.checkFieldError('email', 'email') ? NOTVALID_EMAIL_MESSAGE :
            BLANK_MESSAGE;
  }

  getPasswordErrorMessage() {
    return this.isRequiredMessage('password') ? REQUIRES_MESSAGE : BLANK_MESSAGE;
  }

  getConfirmPasswordErrorMessage() {
    return this.isRequiredMessage('confirmPassword') ? REQUIRES_MESSAGE : BLANK_MESSAGE;
  }

  getConfirmPasswordMismatchErrorMessage() {
    return NOTVALID_PASSWORDMATCHES_MESSAGE;
  }

  getUsernameErrorMessage() {
    return this.isRequiredMessage('username') ? REQUIRES_MESSAGE : BLANK_MESSAGE;
  }

  onPasswordInput() {
    this.registerForm.hasError('mismatch')
      ? this.registerForm.get('confirmPassword').setErrors([{'mismatch': true}])
      : this.registerForm.get('confirmPassword').setErrors(null);
  }

  private isRequiredMessage(fieldName: string): boolean {
    return this.checkFieldError(fieldName, 'required');
  }

  private checkFieldError(fieldName: string, errorType: string) {
    return this.registerForm.get(fieldName).hasError(errorType);
  }

  private passwordMatchValidator(formGroup: FormGroup) {
    return formGroup.get('password').value === formGroup.get('confirmPassword').value ? null : {'mismatch': true};
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { SnacbarAlertService } from 'src/app/services/snacbar-alert.service';
import { NgxSpinnerService } from 'ngx-spinner';

const REQUIRES_MESSAGE = 'You must enter a value';
const NOTVALID_EMAILMESSAGE = 'Not a valid email';
const BLANK_MESSAGE = '';

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
        this.registerForm.get('email').hasError('email') ? NOTVALID_EMAILMESSAGE :
            '';
  }

  getPasswordErrorMessage() {
    return this.isRequiredMessage('password') ? REQUIRES_MESSAGE : BLANK_MESSAGE;
  }

  getConfirmPasswordErrorMessage() {
    return this.isRequiredMessage('confirmPassword') ? REQUIRES_MESSAGE : BLANK_MESSAGE;
  }

  getConfirmPasswordMismatchErrorMessage() {
    return 'mismatch';
  }

  getUsernameErrorMessage() {
    return this.isRequiredMessage('username') ? REQUIRES_MESSAGE : BLANK_MESSAGE;
  }

  isInvalid(fieldName: string) {
    return this.registerForm.get(fieldName).invalid;
  }

  onPasswordInput() {
    if (this.registerForm.hasError('mismatch')) {
      this.registerForm.get('confirmPassword').setErrors([{'mismatch': true}]);
    } else {
      this.registerForm.get('confirmPassword').setErrors(null);
    }
  }

  isMismatch(): boolean {
    // this.registerForm.get('confirmPassword').setErrors([{'mismatch': true}]);
    return this.registerForm.hasError('mismatch');
  }

  private isRequiredMessage(fieldName: string): boolean {
    return this.registerForm.get(fieldName).hasError('required');
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value ? null : {'mismatch': true};
  }

}

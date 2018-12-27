import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { SnacbarAlertService } from 'src/app/services/snacbar-alert.service';
import { NgxSpinnerService } from 'ngx-spinner';

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
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  getEmailErrorMessage() {
    return this.registerForm.get('email').hasError('required') ? 'You must enter a value' :
        this.registerForm.get('email').hasError('email') ? 'Not a valid email' :
            '';
  }

  getPasswordErrorMessage() {
    return this.registerForm.get('password').hasError('required') ? 'You must enter a value' : '';
  }

}

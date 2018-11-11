import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-login',
  templateUrl: './nav-login.component.html',
  styleUrls: ['./nav-login.component.scss']
})
export class NavLoginComponent implements OnInit {
  @Output() LoggedIntoApplication = new EventEmitter();

  model: any = {};

  constructor(
    public authService: AuthService,
    private alertifyService: AlertifyService,
    private router: Router
  ) {}

  ngOnInit() {}

  loggedIn(): boolean {
    return this.LogginExpirationFromToken();
  }

  login(): void {
    this.authService.login(this.model).subscribe(
      response => {
        this.alertifyService.success('loggin succesful');
        this.emitLogin();
      },
      error => {
        this.alertifyService.error(error);
      },
      () => {
        this.router.navigate(['/discover']);
      }
    );
  }

  logout(): void {}

  private LogginExpirationFromToken(): boolean {
    return this.authService.loggedIn();
  }

  private emitLogin() {
    this.LoggedIntoApplication.emit(this.LogginExpirationFromToken);
  }
}

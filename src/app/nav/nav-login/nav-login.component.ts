import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-nav-login',
  templateUrl: './nav-login.component.html',
  styleUrls: ['./nav-login.component.scss']
})
export class NavLoginComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService, private alertifyService: AlertifyService) { }

  ngOnInit() {
  }

  loggedIn(): boolean {
    return this.authService.loggedIn();
  }

  login(): void {
    this.authService.login(this.model).subscribe((response) => {
      this.alertifyService.success('loggin succesful');
    }, error => {
      this.alertifyService.error(error);
    });
  }

  logout(): void {}
}

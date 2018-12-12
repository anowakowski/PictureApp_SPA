import { Routes, Router } from '@angular/router';
import { OnInit, EventEmitter, Output, Component } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { RoutePathService } from 'src/app/_services/RoutePath.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() LoggedIntoApplication = new EventEmitter();

  model: any = {};

  constructor(
    public authService: AuthService,
    private router: Router,
    private routePathService: RoutePathService
  ) {}

  ngOnInit() {}

  loggedIn(): boolean {
    return this.LogginExpirationFromToken();
  }

  login(): void {
    this.authService.login(this.model).subscribe(
      response => {

        this.emitLogin();
      },
      error => {

      },
      () => {
        this.router.navigate([this.routePathService.basePath]);
      }
    );
  }

  logout() {
    localStorage.removeItem('token');

    this.router.navigate(['/home']);
  }

  private LogginExpirationFromToken(): boolean {
    return this.authService.loggedIn();
  }

  private emitLogin() {
    this.LoggedIntoApplication.emit(this.LogginExpirationFromToken);
  }

}

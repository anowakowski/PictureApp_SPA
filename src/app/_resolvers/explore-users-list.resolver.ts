import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_services/user.service';
import { User } from '../_models/user';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ExploreUsersListResolver implements Resolve<User[]> {
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
      return this.userService.getAllUsersWithFollowers().pipe(
          catchError(error => {
              this.router.navigate(['/home']);
              return of(null);
          })
      );
  }
}

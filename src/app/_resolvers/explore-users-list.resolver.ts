import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';

@Injectable()
export class ExploreUsersListResolver implements Resolve<User[]> {
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
      return this.userService.getAllUsersWithFollowers().pipe(
          catchError(error => {
              this.router.navigate(['']);
              return of(null);
          })
      );
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { catchError } from 'rxjs/operators';
import { RouterUrl } from '../../configs/router-url.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  public canActivate(): Observable<boolean> {
    return this.authService.verify$()
      .pipe(
        catchError(() => {
          this.router.navigate([`/${RouterUrl.LOGIN}`]);
          return of(false)
        }),
      );
  }
}

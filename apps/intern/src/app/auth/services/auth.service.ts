import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { AuthDataDto } from '@intern/data';
import { Router } from '@angular/router';
import { LocalStorage } from '../../configs/local-storage';
import { AuthDataService } from './auth-data.service';
import { BackendService } from '../../shared/backend/backend.service';

@Injectable()
export class AuthService {
  constructor(
    private backendService: BackendService,
    private authDataService: AuthDataService,
    private router: Router
  ) {
  }

  public singIn$({ email, password }: { email: string; password: string; }): Observable<AuthDataDto> {
    return this.backendService.post$<AuthDataDto>(`/user/signin`, { email, password })
      .pipe(
        tap(({ token }: AuthDataDto) => localStorage.setItem(LocalStorage.TOKEN, token)),
        tap((authDataDto: AuthDataDto)=> {
          const localStorageUser: string = JSON.stringify(authDataDto);
          return localStorage.setItem(LocalStorage.DATA, localStorageUser);
        }),
        filter((userInterFace: AuthDataDto) => userInterFace.email !== undefined),
      );
  }

  public verify$(): Observable<boolean> {
    return this.backendService.post$<boolean>(`/user/verify`);
  }

  public logout(): void {
    this.router.navigate(['/login']);
    localStorage.removeItem(LocalStorage.TOKEN);
    localStorage.removeItem(LocalStorage.DATA);
    this.authDataService.userData$.next(null);
  }
}

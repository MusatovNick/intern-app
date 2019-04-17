import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { BackendService } from '../../backend/backend.service';
import { AuthDataDto } from '@intern/data';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  public userData$: BehaviorSubject<AuthDataDto> = new BehaviorSubject<AuthDataDto>(null);
  constructor(
    private backendService: BackendService,
    private router: Router
  ) {}

  public singIn$({ email, password }: { email: string; password: string; }): Observable<AuthDataDto> {
    return this.backendService.post$<AuthDataDto>(`/user/signin`, { email, password })
      .pipe(
        tap(({ token }: AuthDataDto) => localStorage.setItem('token', token)),
        filter((userInterFace: AuthDataDto) => userInterFace.email !== undefined),
        tap((userItem: AuthDataDto) => this.userData$.next(userItem)),
      );
  }

  public verify$(): Observable<boolean> {
    return this.backendService.post$<boolean>(`/user/verify`);
  }

  public logout(): void {
    this.router.navigateByUrl('/login');
    localStorage.removeItem('token');
    this.userData$.next(null);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, take, tap, toArray } from 'rxjs/operators';
import { BackendService } from '../../backend/backend.service';
import { AuthDataInterface } from '@intern/data';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  public userData$: BehaviorSubject<AuthDataInterface> = new BehaviorSubject<AuthDataInterface>(null);
  constructor(
    private backendService: BackendService,
    private router: Router
  ) {
  }

  public singIn$({ email, password }: { email: string; password: string; }): Observable<AuthDataInterface[]> {
    return this.backendService.post$<AuthDataInterface>(`/user/signin`, { email, password })
      .pipe(
        tap(({ token }: AuthDataInterface) => localStorage.setItem('token', token)),
        filter((userInterFace: AuthDataInterface) => userInterFace.email !== undefined),
        tap((userItem: AuthDataInterface) => this.userData$.next(userItem)),
      );
  }

  public verify$(): Observable<boolean> {
    return this.backendService.post$<boolean>(`/user/verify`);
  }

  public logout(): void {
    this.router.navigateByUrl('/login');
    localStorage.removeItem('token');
  }
}

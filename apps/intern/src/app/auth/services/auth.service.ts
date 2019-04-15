import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BackendService } from '../../backend/backend.service';
import { AuthDataInterface } from '@intern/data';


@Injectable()
export class AuthService {
  constructor(
    private backendService: BackendService,
  ) {}

  public singIn$({ email, password }: { email: string; password: string; }): Observable<AuthDataInterface> {
    return this.backendService.post$<AuthDataInterface>(`/user/signin`, { email, password })
      .pipe(
        tap(({ token }: AuthDataInterface) => localStorage.setItem('token', token)),
      );
  }

  public verify$(): Observable<boolean> {
    return this.backendService.post$<boolean>(`/user/verify`);
  }
}

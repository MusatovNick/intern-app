import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BackendService } from '../../backend/backend.service';
import { TokenInterface } from '@intern/data';


@Injectable()
export class AuthService {
  constructor(
    private backendService: BackendService,
  ) {}

  public singIn$({ email, password }: { email: string; password: string; }): Observable<TokenInterface> {
    return this.backendService.post$<TokenInterface>(`/user/signin`, { email, password })
      .pipe(
        tap(({ token }: TokenInterface) => localStorage.setItem('token', token)),
      );
  }

  public verify$(): Observable<boolean> {
    return this.backendService.post$<boolean>(`/user/verify`);
  }
}

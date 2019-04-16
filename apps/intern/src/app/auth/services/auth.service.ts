import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { BackendService } from '../../backend/backend.service';
import { AuthDataInterface } from '@intern/data';
import { UserDataService } from './user-data.service';

@Injectable()
export class AuthService {
  constructor(
    private backendService: BackendService,
    private userDataService: UserDataService
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


  public getUserData$(): Observable<AuthDataInterface> {
    console.log(localStorage);
    return this.userDataService.loadUser$();
  }

}

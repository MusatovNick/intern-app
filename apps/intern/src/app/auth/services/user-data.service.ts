import { Injectable } from '@angular/core';
import { BackendService } from '../../backend/backend.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthDataInterface } from '@intern/data';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private backendService: BackendService) { }

  public loadUser$(): Observable<AuthDataInterface> {
    return this.backendService.get$('/user', {})
      .pipe(
        tap(() => localStorage.getItem('token')),
      );
  }
}

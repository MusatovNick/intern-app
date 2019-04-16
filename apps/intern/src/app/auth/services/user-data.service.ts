import { Injectable } from '@angular/core';
import { BackendService } from '../../backend/backend.service';
import { tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private user$: BehaviorSubject<{}> = new BehaviorSubject<{}>({});
  constructor(private backendService: BackendService) { }

  public loadUser$(): Observable<any> {
    return this.backendService.get$('/user', {})
      .pipe(
        tap(() => this.user$.next(localStorage.getItem('token'))),
      );
  }
}

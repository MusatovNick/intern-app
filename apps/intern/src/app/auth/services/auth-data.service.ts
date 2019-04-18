import { Injectable } from '@angular/core';
import { AuthDataDto } from '@intern/data';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorage } from '../../configs/local-storage';

@Injectable({
  providedIn: 'root'
})
export class AuthDataService {

  public userData$: BehaviorSubject<AuthDataDto> = new BehaviorSubject<AuthDataDto>(null);
  constructor() { }

  public getUserData$(): Observable<AuthDataDto> {
    const localDataUser: AuthDataDto = JSON.parse(localStorage.getItem(LocalStorage.DATA));
    this.userData$.next(localDataUser);
    return this.userData$.asObservable();
  }
}

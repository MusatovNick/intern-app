import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BackendService } from '../../backend/backend.service';
import { GlobalState } from '../../+state/global.reducers';
import { Observable } from 'rxjs/internal/Observable';
import { UserDto } from '@intern/data';
import { getAllInterns } from '../../+state/intern/selectors/intern.selectors';
import { filter, switchMapTo, take } from 'rxjs/operators';
import { AddInternList } from '../../+state/intern/actions/intern.actions';
import { InternState } from '../../+state/intern/reducers/intern.reducer';
@Injectable({
  providedIn: 'root'
})
export class InternService {
  constructor(
    private store$: Store<GlobalState>,
    private backendService: BackendService,
  ) { }

  public getAllInterns$(): Observable<UserDto[]> {
      const checkStoreInterns$: Observable<UserDto[]> = this.store$.select(getAllInterns);

    checkStoreInterns$.pipe(
      take(1),
      filter((intern: UserDto[]) => !!intern),
      switchMapTo(this.backendService.get$<UserDto>('/user', {}))
    ).subscribe((userDto: UserDto) => this.store$.dispatch(new AddInternList(userDto)));

    return checkStoreInterns$;
  }
}

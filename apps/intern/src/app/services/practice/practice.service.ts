import { Injectable } from '@angular/core';
import { GlobalState } from '../../+state/global.reducers';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/internal/Observable';
import { PracticeDto } from '@intern/data';
import { filter, switchMapTo, take } from 'rxjs/operators';
import { AddPracticeList } from '../../+state/practice/actions/practice.actions';
import { getAllPractices } from '../../+state/practice/selectors/practice.selectors';
import { BackendService } from '../../shared/backend/backend.service';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {

  constructor(
    private store$: Store<GlobalState>,
    private backendService: BackendService,
  ) { }

  public getAllPractices$(): Observable<PracticeDto[]> {
    const checkStorePractices$: Observable<PracticeDto[]> = this.store$.select(getAllPractices);

    checkStorePractices$.pipe(
      take(1),
      filter((practice: PracticeDto[]) => !!practice),
      switchMapTo(this.backendService.get$<PracticeDto[]>('/practice', {}))
    ).subscribe((practiceDtoList: PracticeDto[]) => this.store$.dispatch(new AddPracticeList(practiceDtoList)));

    return checkStorePractices$;
  }
}

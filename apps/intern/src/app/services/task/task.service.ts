import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BackendService } from '../../backend/backend.service';
import { GlobalState } from '../../+state/global.reducers';
import { filter, switchMapTo, take } from 'rxjs/operators';
import { TaskDto } from '@intern/data';
import { Observable } from 'rxjs/internal/Observable';
import { getAllTasks } from '../../+state/task/selectors/task.selectors';
import { AddTaskList } from '../../+state/task/actions/task.actions';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private store$: Store<GlobalState>,
    private backendService: BackendService,
  ) { }

  public getAllTasks$(): Observable<TaskDto[]> {
    const checkStoreTasks$ = this.store$.select(getAllTasks);

    checkStoreTasks$.pipe(
      take(1),
      filter((task: TaskDto[]) => !!task),
      switchMapTo(this.backendService.get$('/task', {}))
    ).subscribe(value => this.store$.dispatch(new AddTaskList(value)));

    return checkStoreTasks$;
  }
}
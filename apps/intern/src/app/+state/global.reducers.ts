import * as fromPractice from './practice/reducers/practice.reducer';
import * as fromIntern from './intern/reducers/intern.reducer';
import * as fromTask from './task/reducers/task.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface GlobalState {
  task: fromTask.TaskState;
  practice: fromPractice.PracticeState;
  intern: fromIntern.InternState;
}

export const reducers: ActionReducerMap<GlobalState> = {
  task: fromTask.reducer,
  practice: fromPractice.reducer,
  intern: fromIntern.reducer,
};

import { Action } from '@ngrx/store';
import { TaskDto } from '@intern/data';
import { Pick } from '../../interfaces/pick.interface';

export enum TaskActionTypes {
  ADD_TASK_LIST = '[Task] Add Task List',
  REMOVE_TASK = '[Task] Remove Task',
  UPDATE_TASK= '[Task] Update Task',
}

export class AddTaskList implements Action {
  readonly type = TaskActionTypes.ADD_TASK_LIST;

  constructor(public payload: TaskDto) {}
}

export class RemoveTask implements Action {
  readonly type = TaskActionTypes.REMOVE_TASK;

  constructor(public payload: Pick<TaskDto, '_id'>) {}
}

export class UpdateTask implements Action {
  readonly type = TaskActionTypes.UPDATE_TASK;

  constructor(public payload: TaskDto) {}
}

export type TaskActions =
  | AddTaskList
  | UpdateTask
  | RemoveTask;

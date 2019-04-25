import {
  TaskActions,
  TaskActionTypes,
  RemoveTask,
  UpdateTask, AddTaskList
} from '../actions/task.actions';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { ActionReducer } from '@ngrx/store';
import { TaskDto } from '@intern/data';

export const TASK_FEATURE_KEY = 'task';

export const tasksAdapter = createEntityAdapter<TaskDto>({
  selectId: ({ _id }: TaskDto) => _id,
});

export interface TaskState extends EntityState<TaskDto> {}

export const taskInitialState: TaskState = tasksAdapter.getInitialState({});

const reducers: Record<TaskActionTypes, ActionReducer<TaskState>> = {
  [TaskActionTypes.ADD_TASK_LIST]: addTaskList,
  [TaskActionTypes.UPDATE_TASK]: updateTask,
  [TaskActionTypes.REMOVE_TASK]: removeTask,
};

export function addTaskList(state: TaskState, { payload }: AddTaskList): TaskState {
  return tasksAdapter.addMany(payload, state);
}

export function updateTask(state: TaskState, { payload }: UpdateTask): TaskState {
  return tasksAdapter.updateOne({id: payload.userId, changes: payload}, state);
}

function removeTask(state: TaskState, { payload: { _id } }: RemoveTask): TaskState {
  return tasksAdapter.removeOne(_id, state);
}

export function reducer(state: TaskState = taskInitialState, action: TaskActions): TaskState {
  return action.type in reducers ? reducers[action.type](state, action) : state;
}

export const {
  selectEntities,
  selectAll,
} = tasksAdapter.getSelectors();

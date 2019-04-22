import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TASK_FEATURE_KEY, selectEntities, selectAll } from '../reducers/task.reducer';
import { TaskDto } from '@intern/data';
import { Dictionary } from '@ngrx/entity';

const selectState = createFeatureSelector(TASK_FEATURE_KEY);
const getEntities = createSelector(selectState, selectEntities);

export const getAllTasks = createSelector(selectState, selectAll);

export const getTaskById = (id: string) =>
  createSelector(getEntities, (entities: Dictionary<TaskDto>) => entities[id]);

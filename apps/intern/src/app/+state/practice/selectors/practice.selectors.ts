import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PRACTICE_FEATURE_KEY, selectEntities,selectAll } from '../reducers/practice.reducer';
import { Dictionary } from '@ngrx/entity';
import { PracticeDto } from '@intern/data';

const selectState = createFeatureSelector(PRACTICE_FEATURE_KEY);
const getEntities = createSelector(selectState, selectEntities);

export const getAllPractices = createSelector(selectState, selectAll);

export const getPracticeById = (id: string) =>
  createSelector(getEntities, (entities: Dictionary<PracticeDto>) => entities[id]);

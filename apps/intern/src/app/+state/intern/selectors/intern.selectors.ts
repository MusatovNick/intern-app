import { createFeatureSelector, createSelector } from '@ngrx/store';
import { INTERN_FEATURE_KEY, selectEntities, selectAll, InternState } from '../reducers/intern.reducer';
import { UserDto } from '@intern/data';
import { Dictionary } from '@ngrx/entity';

const selectState= createFeatureSelector<InternState>(INTERN_FEATURE_KEY);
const getEntities = createSelector(selectState, selectEntities);

export const getAllInterns = createSelector(selectState, selectAll);

export const getInternById = (id: string) =>
  createSelector(getEntities, (entities: Dictionary<UserDto>) => entities[id]);

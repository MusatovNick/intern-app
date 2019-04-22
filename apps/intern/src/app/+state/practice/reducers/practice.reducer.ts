import {
  AddPracticeList,
  PracticeActions,
  PracticeActionTypes,
  RemovePractice,
  UpdatePractice
} from '../actions/practice.actions';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { ActionReducer } from '@ngrx/store';
import { PracticeDto } from '@intern/data';

export const PRACTICE_FEATURE_KEY = 'practice';

export const practicesAdapter = createEntityAdapter<PracticeDto>({
  selectId: ({ _id }: PracticeDto) => _id,
});

export interface PracticeState extends EntityState<PracticeDto> {}

export const practiceInitialState: PracticeState = practicesAdapter.getInitialState({});

const reducers: Record<PracticeActionTypes, ActionReducer<PracticeState>> = {
  [PracticeActionTypes.ADD_PRACTICE_LIST]: addPracticeList,
  [PracticeActionTypes.UPDATE_PRACTICE]: updatePractice,
  [PracticeActionTypes.REMOVE_PRACTICE]: removePractice,
};

export function addPracticeList(state: PracticeState, { payload }: AddPracticeList): PracticeState {
  return practicesAdapter.addOne(payload, state);
}

export function updatePractice(state: PracticeState, { payload }: UpdatePractice): PracticeState {
  return practicesAdapter.updateOne({id: payload._id, changes: payload}, state);
}

function removePractice(state: PracticeState, { payload: { _id } }: RemovePractice): PracticeState {
  return practicesAdapter.removeOne(_id, state);
}

export function reducer(state: PracticeState = practiceInitialState, action: PracticeActions): PracticeState {
  return action.type in reducers ? reducers[action.type](state, action) : state;
}

export const {
  selectEntities,
  selectAll,
} = practicesAdapter.getSelectors();

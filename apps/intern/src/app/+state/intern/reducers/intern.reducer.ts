import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { ActionReducer } from '@ngrx/store';
import { UserDto } from '@intern/data';
import {
  AddInternList,
  InternActions,
  InternActionTypes,
  RemoveIntern,
  UpdateIntern
} from '../actions/intern.actions';

export const INTERN_FEATURE_KEY = 'intern';

export const internAdapter = createEntityAdapter<UserDto>({
  selectId: ({ _id }: UserDto) => _id,
});

export interface InternState extends EntityState<UserDto> {}

export const internInitialState: InternState = internAdapter.getInitialState({});

const reducers: Record<InternActionTypes, ActionReducer<InternState>> = {
  [InternActionTypes.ADD_INTERN_LIST]: addInternList,
  [InternActionTypes.UPDATE_INTERN]: updateIntern,
  [InternActionTypes.REMOVE_INTERN]: removeIntern,
};

export function addInternList(state: InternState, { payload }: AddInternList): InternState {
  return internAdapter.addOne(payload, state);
}

export function updateIntern(state: InternState, { payload }: UpdateIntern): InternState {
  return internAdapter.updateOne({id: payload._id, changes: payload}, state);
}

function removeIntern(state: InternState, { payload: { _id } }: RemoveIntern): InternState {
  return internAdapter.removeOne(_id, state);
}

export function reducer(state: InternState = internInitialState, action: InternActions): InternState {
  return action.type in reducers ? reducers[action.type](state, action) : state;
}

export const {
  selectAll,
  selectEntities
} = internAdapter.getSelectors();

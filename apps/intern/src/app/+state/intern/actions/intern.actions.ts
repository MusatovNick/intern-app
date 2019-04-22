import { Action } from '@ngrx/store';
import { UserDto } from '@intern/data';
import { Pick } from '../../interfaces/pick.interface';

export enum InternActionTypes {
  ADD_INTERN_LIST = '[Intern] Add Intern List',
  REMOVE_INTERN = '[Intern] Remove  Intern',
  UPDATE_INTERN = '[Intern] Update Intern',
}

export class AddInternList implements Action {
  readonly type = InternActionTypes.ADD_INTERN_LIST;

  constructor(public payload: UserDto) {}
}

export class RemoveIntern implements Action {
  readonly type = InternActionTypes.REMOVE_INTERN;

  constructor(public payload: Pick<UserDto, '_id'>) {}
}

export class UpdateIntern implements Action {
  readonly type = InternActionTypes.UPDATE_INTERN;

  constructor(public payload: UserDto) {}
}

export type InternActions =
  | AddInternList
  | UpdateIntern
  | RemoveIntern;

import { Action } from '@ngrx/store';
import { PracticeDto } from '@intern/data';

export enum PracticeActionTypes {
  ADD_PRACTICE_LIST = '[Practice] Add Practice List',
  REMOVE_PRACTICE = '[Practice] Remove Practice',
  UPDATE_PRACTICE = '[Practice] Update Practice',
}

export class AddPracticeList implements Action {
  readonly type = PracticeActionTypes.ADD_PRACTICE_LIST;

  constructor(public payload: PracticeDto) {}
}

export class RemovePractice implements Action {
  readonly type = PracticeActionTypes.REMOVE_PRACTICE;

  constructor(public payload: Pick<PracticeDto, '_id'>) {}
}

export class UpdatePractice implements Action {
  readonly type = PracticeActionTypes.UPDATE_PRACTICE;

  constructor(public payload: PracticeDto) {}
}

export type PracticeActions =
  | AddPracticeList
  | UpdatePractice
  | RemovePractice;

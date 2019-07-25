import { createReducer, on } from '@ngrx/store';
import { approve, decline, resetState } from './manage.action';

export const initialState = 'unapproved';

export const stateReducer = createReducer(initialState,
  on(approve, state => 'approve'),
  on(decline, state => 'decline'),
  on(resetState, state => 'unapproved')
);
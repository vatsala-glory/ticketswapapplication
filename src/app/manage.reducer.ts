import { createReducer, on } from '@ngrx/store';
import { update } from './manage.action';

export const initialState = '';

export const stateReducer = createReducer(initialState,
  on(update,  (state, {data}) => state = data )
);
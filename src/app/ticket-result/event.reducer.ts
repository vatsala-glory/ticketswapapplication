import { createReducer, on } from '@ngrx/store';
import * as EventActions from './event.action';
import { Event } from './event.model';
import EventState, { initializeState } from './event.state';

export const initialState = initializeState();

export const eventReducer = createReducer(initialState,
    on(EventActions.GetEventAction, event => event),
    on(EventActions.SuccessGetEventAction, (event: EventState, { payload }) => {
        return { ...event, Events: payload };
      }),
   );

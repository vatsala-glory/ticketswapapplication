import { createAction, props } from '@ngrx/store';
import { Event } from './event.model';

export const GetEventAction = createAction('[TicketResult Component] - Get Event');


export const BeginGetEventAction = createAction('[TicketResult Component] - Begin Get Event');

export const SuccessGetEventAction = createAction(
  '[TicketResult Component] - Success Get Event',
  props<{ payload: Event[] }>()
);


export const ErrorEventAction = createAction('[TicketResult Component] - Error', props<Error>());

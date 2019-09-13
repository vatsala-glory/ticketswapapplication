import { Event } from './event.model';

export default class EventState {
    Events: Array <Event>;
}

export const initializeState = () => {
    return { Events: Array<Event>()}
}
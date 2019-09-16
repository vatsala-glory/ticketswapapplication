import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Action, Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as EventActions from './event.action';
import { Event}  from './event.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = '/api/v1/'

  constructor( private http: HttpClient, private action$: Actions, private store: Store<any> ) {
    this.state$ = this.store.select('state').subscribe(x => {
      this.stateVariable = x;
    });
   }
    state$:any;
    stateVariable;  
   

   private get state() {
    return this.stateVariable;
   }
  
  

  fetchData: Observable<Action>  = createEffect(() =>   
  this.action$.pipe(
    ofType(EventActions.BeginGetEventAction),
    mergeMap(action =>
      this.http.get(this.url + this.state).pipe(
        map((data: Event[]) => {
          return EventActions.SuccessGetEventAction({ payload: data });
        }),
        catchError((error: Error) => {
          return of(EventActions.ErrorEventAction(error));
        })
      )
    )
  )
    
  );
}

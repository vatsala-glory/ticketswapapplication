import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { DataService } from './data.service';
import { Event } from './event.model';
import EventState from './event.state';
import * as EventAction from './event.action';

@Component({
  selector: 'app-ticket-result',
  templateUrl: './ticket-result.component.html',
  styleUrls: ['./ticket-result.component.scss']
})
export class TicketResultComponent implements OnInit {

  constructor( private route: ActivatedRoute, private dataService : DataService,private store: Store<EventState>) { 
    this.event$ = store.pipe(select('events'));   
  }

  event$: Observable<EventState>; 
  EventSubscription: Subscription;
  EventList: Event[];

  ngOnInit() {
this.route.params.subscribe(data => {
     this.EventSubscription = this.event$
     .pipe(
       map(x => {
         this.EventList = x.Events['data'];
       })
     )
     .subscribe();
      this.store.dispatch(EventAction.BeginGetEventAction());
    });
  }

}

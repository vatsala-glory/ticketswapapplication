import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { approve, decline, resetState } from '../manage.action';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
   state$: Observable<string>;
   state: String;

  constructor(private store: Store<{ state: string }>) {
    this.state$ = store.pipe(select('state'));
   }

   ngOnInit(){
     this.store.select('state').subscribe(val => {
       this.state = val;
     })
   }

   approve() {
    this.store.dispatch(approve());
  }

  decline() {
    this.store.dispatch(decline());
  }

  reset() {
    this.store.dispatch(resetState());
  }
}
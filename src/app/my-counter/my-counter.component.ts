import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, AsyncSubject } from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';
import { approve, decline, resetState } from '../manage.action';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss'],
})
export class MyCounterComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  
  }

  ngOnInit(){
  this.store.select('count').subscribe(val =>{
    if(val >= 10) {
      this.store.dispatch(approve());
    }else if(val < 0){
      this.store.dispatch(decline());
    }else {
      this.store.dispatch(resetState());
    }
   });
  }

  increment() {
    this.store.dispatch(increment());  
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
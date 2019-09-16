import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { update } from '../manage.action';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
   state$: Observable<string>;
   state: String;

  constructor(private store: Store<{ state: string }>, private router: Router) {
    this.state$ = store.pipe(select('state'));
   }

   ngOnInit(){
     this.store.select('state').subscribe(val => {
       this.state = val;
     })
   }

  showResults(routeState){    
    this.store.dispatch(update({data: routeState}));
    this.router.navigate(['./resultPage/'+ routeState], {state: {data:routeState}});
  }
}
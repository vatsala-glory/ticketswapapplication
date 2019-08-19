import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app.routing.module';
import { counterReducer } from './counter.reducer';
import { stateReducer } from './manage.reducer';
import { HeaderModuleModule } from './header-module/header-module.module';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TicketTilesComponent } from './ticket-tiles/ticket-tiles.component';



@NgModule({
  declarations: [AppComponent, MyCounterComponent, HomePageComponent, PageNotFoundComponent, TicketTilesComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HeaderModuleModule,
    StoreModule.forRoot({ count: counterReducer, state: stateReducer }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ServiceInterceptor } from './service.interceptor';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app.routing.module';
import { counterReducer } from './counter.reducer';
import { stateReducer } from './manage.reducer';
import { eventReducer } from './ticket-result/event.reducer';
import { HeaderModuleModule } from './header-module/header-module.module';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TicketTilesComponent } from './ticket-tiles/ticket-tiles.component';
import { TicketResultComponent } from './ticket-result/ticket-result.component';
import { DataService } from './ticket-result/data.service';



@NgModule({
  declarations: [AppComponent, HomePageComponent, PageNotFoundComponent, TicketTilesComponent, TicketResultComponent],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    HeaderModuleModule,
    StoreModule.forRoot({ count: counterReducer, state: stateReducer, events: eventReducer }),
    EffectsModule.forRoot([DataService]),
    NgbModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServiceInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
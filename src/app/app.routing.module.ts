import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { TicketResultComponent } from './ticket-result/ticket-result.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: HomePageComponent,
  },
  {
    path:'resultPage/:data',
    pathMatch: 'full',
    component:TicketResultComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
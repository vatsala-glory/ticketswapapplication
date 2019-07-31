import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [HeaderComponentComponent],
  declarations: [HeaderComponentComponent, SearchBarComponent]
})
export class HeaderModuleModule { }
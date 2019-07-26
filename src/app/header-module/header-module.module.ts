import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [HeaderComponentComponent],
  declarations: [HeaderComponentComponent, SearchBarComponent]
})
export class HeaderModuleModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownDirective} from './dropdown.directive';
import {HeaderDropdownDirective} from './header-dropdown.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DropdownDirective,
    HeaderDropdownDirective
  ],
  exports: [
    DropdownDirective,
    CommonModule,
    HeaderDropdownDirective
  ]
})
export class SharedModule { }

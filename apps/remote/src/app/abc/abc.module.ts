import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbcRoutingModule } from './abc-routing.module';
import { AbcComponent } from './abc.component';


@NgModule({
  declarations: [
    AbcComponent
  ],
  imports: [
    CommonModule,
    AbcRoutingModule
  ]
})
export class AbcModule { }

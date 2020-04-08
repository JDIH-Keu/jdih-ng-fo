import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PustakaRoutingModule } from './pustaka-routing.module';
import { PustakaComponent } from './pustaka.component';


@NgModule({
  declarations: [PustakaComponent],
  imports: [
    CommonModule,
    PustakaRoutingModule
  ]
})
export class PustakaModule { }

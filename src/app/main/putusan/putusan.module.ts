import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PutusanRoutingModule } from './putusan-routing.module';
import { PutusanComponent } from './putusan.component';


@NgModule({
  declarations: [PutusanComponent],
  imports: [
    CommonModule,
    PutusanRoutingModule
  ]
})
export class PutusanModule { }

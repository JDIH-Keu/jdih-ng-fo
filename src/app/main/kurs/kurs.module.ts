import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KursRoutingModule } from './kurs-routing.module';
import { KursComponent } from './kurs.component';


@NgModule({
  declarations: [KursComponent],
  imports: [
    CommonModule,
    KursRoutingModule
  ]
})
export class KursModule { }

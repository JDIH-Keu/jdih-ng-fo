import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeraturanRoutingModule } from './peraturan-routing.module';
import { PeraturanComponent } from './peraturan.component';


@NgModule({
  declarations: [PeraturanComponent],
  imports: [
    CommonModule,
    PeraturanRoutingModule
  ]
})
export class PeraturanModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtikelRoutingModule } from './artikel-routing.module';
import { ArtikelComponent } from './artikel.component';


@NgModule({
  declarations: [ArtikelComponent],
  imports: [
    CommonModule,
    ArtikelRoutingModule
  ]
})
export class ArtikelModule { }

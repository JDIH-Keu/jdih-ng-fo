import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeritaRoutingModule } from './berita-routing.module';
import { BeritaComponent } from './berita.component';


@NgModule({
  declarations: [BeritaComponent],
  imports: [
    CommonModule,
    BeritaRoutingModule
  ]
})
export class BeritaModule { }

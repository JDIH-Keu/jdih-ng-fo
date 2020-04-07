import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeritaRoutingModule } from './berita-routing.module';
import { BeritaComponent } from './berita.component';
import { BeritaListComponent } from './components/berita-list/berita-list.component';
import { BeritaDetailComponent } from './components/berita-detail/berita-detail.component';


@NgModule({
  declarations: [BeritaComponent, BeritaListComponent, BeritaDetailComponent],
  imports: [
    CommonModule,
    BeritaRoutingModule
  ]
})
export class BeritaModule { }

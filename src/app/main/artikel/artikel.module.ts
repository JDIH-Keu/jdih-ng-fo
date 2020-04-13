import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';

import { ArtikelRoutingModule } from './artikel-routing.module';
import { ArtikelComponent } from './artikel.component';
import { ArtikelListComponent } from './components/artikel-list/artikel-list.component';
import { ArtikelFilterComponent } from './components/artikel-filter/artikel-filter.component';
import { ArtikelDetailComponent } from './components/artikel-detail/artikel-detail.component';


@NgModule({
  declarations: [ArtikelComponent, ArtikelListComponent, ArtikelFilterComponent, ArtikelDetailComponent],
  imports: [
    CommonModule,
    ArtikelRoutingModule,
    FormsModule,
    SharedModule,
    NgSelectModule
  ]
})
export class ArtikelModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';

import { PutusanRoutingModule } from './putusan-routing.module';
import { PutusanComponent } from './putusan.component';
import { PutusanListComponent } from './components/putusan-list/putusan-list.component';
import { PutusanFilterComponent } from './components/putusan-filter/putusan-filter.component';
import { PutusanDetailComponent } from './components/putusan-detail/putusan-detail.component';


@NgModule({
  declarations: [PutusanComponent, PutusanListComponent, PutusanFilterComponent, PutusanDetailComponent],
  imports: [
    CommonModule,
    PutusanRoutingModule,
    FormsModule,
    SharedModule,
    NgSelectModule
  ]
})
export class PutusanModule { }

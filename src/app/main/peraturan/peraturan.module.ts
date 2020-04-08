import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';

import { PeraturanRoutingModule } from './peraturan-routing.module';
import { PeraturanComponent } from './peraturan.component';
import { PeraturanListComponent } from './components/peraturan-list/peraturan-list.component';
import { PeraturanDetailComponent } from './components/peraturan-detail/peraturan-detail.component';
import { PeraturanFilterComponent } from './components/peraturan-filter/peraturan-filter.component';


@NgModule({
  declarations: [PeraturanComponent, PeraturanListComponent, PeraturanDetailComponent, PeraturanFilterComponent],
  imports: [
    CommonModule,
    PeraturanRoutingModule,
    SharedModule,
    NgSelectModule
  ]
})
export class PeraturanModule { }

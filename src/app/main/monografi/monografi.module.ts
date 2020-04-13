import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';

import { MonografiRoutingModule } from './monografi-routing.module';
import { MonografiComponent } from './monografi.component';
import { MonografiListComponent } from './components/monografi-list/monografi-list.component';
import { MonografiFilterComponent } from './components/monografi-filter/monografi-filter.component';
import { MonografiDetailComponent } from './components/monografi-detail/monografi-detail.component';


@NgModule({
  declarations: [MonografiComponent, MonografiListComponent, MonografiFilterComponent, MonografiDetailComponent],
  imports: [
    CommonModule,
    MonografiRoutingModule,
    FormsModule,
    SharedModule,
    NgSelectModule
  ]
})
export class MonografiModule { }

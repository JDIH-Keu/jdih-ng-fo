import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonografiRoutingModule } from './monografi-routing.module';
import { MonografiComponent } from './monografi.component';


@NgModule({
  declarations: [MonografiComponent],
  imports: [
    CommonModule,
    MonografiRoutingModule
  ]
})
export class MonografiModule { }

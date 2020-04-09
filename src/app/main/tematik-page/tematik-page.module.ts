import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { TematikPageRoutingModule } from './tematik-page-routing.module';
import { TematikPageComponent } from './tematik-page.component';


@NgModule({
  declarations: [TematikPageComponent],
  imports: [
    CommonModule,
    TematikPageRoutingModule,
    SharedModule
  ]
})
export class TematikPageModule { }

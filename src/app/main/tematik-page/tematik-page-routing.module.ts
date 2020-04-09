import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TematikPageComponent } from './tematik-page.component';

const routes: Routes = [{ path: '', component: TematikPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TematikPageRoutingModule { }

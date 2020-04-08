import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PustakaComponent } from './pustaka.component';

const routes: Routes = [{ path: '', component: PustakaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PustakaRoutingModule { }

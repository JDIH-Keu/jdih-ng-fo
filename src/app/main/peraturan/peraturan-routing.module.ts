import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeraturanComponent } from './peraturan.component';

const routes: Routes = [{ path: '', component: PeraturanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeraturanRoutingModule { }

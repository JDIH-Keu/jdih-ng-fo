import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonografiComponent } from './monografi.component';

const routes: Routes = [{ path: '', component: MonografiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonografiRoutingModule { }

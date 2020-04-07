import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PutusanComponent } from './putusan.component';

const routes: Routes = [{ path: '', component: PutusanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PutusanRoutingModule { }

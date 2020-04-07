import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KursComponent } from './kurs.component';

const routes: Routes = [{ path: '', component: KursComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KursRoutingModule { }

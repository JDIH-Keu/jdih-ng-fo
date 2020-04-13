import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PutusanComponent } from './putusan.component';
import { PutusanListComponent } from './components/putusan-list/putusan-list.component';
import { PutusanDetailComponent } from './components/putusan-detail/putusan-detail.component';

const routes: Routes = [{
  path: '', component: PutusanComponent,
  children: [
    { path: '', redirectTo: 'list' },
    { path: 'list', component: PutusanListComponent },
    { path: 'detail', component: PutusanDetailComponent }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PutusanRoutingModule { }

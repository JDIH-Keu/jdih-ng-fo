import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonografiComponent } from './monografi.component';
import { MonografiListComponent } from './components/monografi-list/monografi-list.component';
import { MonografiDetailComponent } from './components/monografi-detail/monografi-detail.component';

const routes: Routes = [{
  path: '', component: MonografiComponent,
  children: [
    { path: '', redirectTo: 'list' },
    { path: 'list', component: MonografiListComponent },
    { path: 'detail', component: MonografiDetailComponent }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonografiRoutingModule { }

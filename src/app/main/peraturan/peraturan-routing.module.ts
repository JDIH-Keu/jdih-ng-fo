import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeraturanComponent } from './peraturan.component';
import { PeraturanListComponent } from './components/peraturan-list/peraturan-list.component';
import { PeraturanDetailComponent } from './components/peraturan-detail/peraturan-detail.component';

const routes: Routes = [{
  path: '', component: PeraturanComponent,
  children: [
    { path: '', redirectTo: 'list' },
    { path: 'list', component: PeraturanListComponent },
    { path: 'detail', component: PeraturanDetailComponent }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeraturanRoutingModule { }

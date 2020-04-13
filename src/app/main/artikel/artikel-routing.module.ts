import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtikelComponent } from './artikel.component';
import { ArtikelListComponent } from './components/artikel-list/artikel-list.component';
import { ArtikelDetailComponent } from './components/artikel-detail/artikel-detail.component';

const routes: Routes = [{
  path: '', component: ArtikelComponent,
  children: [
    { path: '', redirectTo: 'list' },
    { path: 'list', component: ArtikelListComponent },
    { path: 'detail', component: ArtikelDetailComponent }]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtikelRoutingModule { }

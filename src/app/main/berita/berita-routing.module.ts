import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeritaComponent } from './berita.component';
import { BeritaListComponent } from './components/berita-list/berita-list.component';
import { BeritaDetailComponent } from './components/berita-detail/berita-detail.component';


const routes: Routes = [{
  path: '', component: BeritaComponent,
  children: [
    { path: '', redirectTo: 'list' },
    { path: 'list', component: BeritaListComponent },
    { path: 'detail', component: BeritaDetailComponent }]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeritaRoutingModule { }
